/// ////////////////////////
// Fetch Transcripts Code //
/// ////////////////////////

// Variable to set URL for daily fetch() function
var yesterday = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD')
var yesterdaysDataURL = 'https://mihndbotblob.blob.core.windows.net/mihndbot-transcripts/finalTranscripts/dailyTranscripts/' + yesterday + '.json'

// Variable to set URL for monthly fetch() function
var thisMonth = moment(new Date()).format('YYYY-MM')
var thisMonthsDataURL = 'https://mihndbotblob.blob.core.windows.net/mihndbot-transcripts/finalTranscripts/monthlyTranscripts/' + thisMonth + '.json'

// Variable to set URL for yearly fetch() function
var thisYear = moment(new Date()).format('YYYY')
var thisYearsDataURL = 'https://mihndbotblob.blob.core.windows.net/mihndbot-transcripts/finalTranscripts/yearlyTranscripts/' + thisYear + '.json'

// Fetch() yesterday's transcripts
function getDailyTranscripts (url) {
  data = fetch(url)
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(typeFilter)

  Promise.all([
    data.then(dailyUsersChart),
    data.then(dailyConversationsChart),
    data.then(dailyMessagesChart),
    data.then(dailyQuestionsChart),
    data.then(dailyTimeChart),
    data.then(dailyRawDataTable)
  ])
    .catch((error) => {
      console.log(error)
      if (error == 'Error: The specified blob does not exist.') {
        var dailyUsersChart = document.getElementById('dailyUsersChart').getContext('2d')
        var dailyConversationsChart = document.getElementById('dailyConversationsChart').getContext('2d')
        var dailyMessagesChart = document.getElementById('dailyMessagesChart').getContext('2d')
        var dailyQuestionsChart = document.getElementById('dailyQuestionsChart').getContext('2d')
        var dailyTimeChart = document.getElementById('dailyTimeChart').getContext('2d')

        dailyUsersChart.clearRect(0, 0, dailyUsersChart.canvas.width, dailyUsersChart.canvas.height)
        dailyConversationsChart.clearRect(0, 0, dailyConversationsChart.canvas.width, dailyConversationsChart.canvas.height)
        dailyMessagesChart.clearRect(0, 0, dailyMessagesChart.canvas.width, dailyMessagesChart.canvas.height)
        dailyQuestionsChart.clearRect(0, 0, dailyQuestionsChart.canvas.width, dailyQuestionsChart.canvas.height)
        dailyTimeChart.clearRect(0, 0, dailyTimeChart.canvas.width, dailyTimeChart.canvas.height)

        document.getElementById('dailyTotalUsers').innerHTML = ''
        document.getElementById('dailyTotalConversations').innerHTML = '<span style="display:flex; width:100%; background-color: white; padding-top:80px">No Data</span>'
        document.getElementById('dailyTotalMessages').innerHTML = ''
        document.getElementById('dailyTotalQuestions').innerHTML = ''
        document.getElementById('dailyTotalTime').innerHTML = ''
      } else {
        // document.getElementById('dailyTotalConversations').innerHTML = 'Error'
      }
    })
}

// Fetch() this month's transcripts
function getMonthlyTranscripts (url) {
  data = fetch(url)
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(typeFilter)

  Promise.all([
    data.then(monthlyUsersChart),
    data.then(monthlyConversationsChart),
    data.then(monthlyMessagesChart),
    data.then(monthlyQuestionsChart),
    data.then(monthlyTimeChart)
  ])
    .catch((error) => {
      console.log(error)
      if (error == 'Error: The specified blob does not exist.') {
        var dailyUsersChart = document.getElementById('dailyUsersChart').getContext('2d')
        var dailyConversationsChart = document.getElementById('dailyConversationsChart').getContext('2d')
        var dailyMessagesChart = document.getElementById('dailyMessagesChart').getContext('2d')
        var dailyQuestionsChart = document.getElementById('dailyQuestionsChart').getContext('2d')
        var dailyTimeChart = document.getElementById('dailyTimeChart').getContext('2d')

        dailyUsersChart.clearRect(0, 0, dailyUsersChart.canvas.width, dailyUsersChart.canvas.height)
        dailyConversationsChart.clearRect(0, 0, dailyConversationsChart.canvas.width, dailyConversationsChart.canvas.height)
        dailyMessagesChart.clearRect(0, 0, dailyMessagesChart.canvas.width, dailyMessagesChart.canvas.height)
        dailyQuestionsChart.clearRect(0, 0, dailyQuestionsChart.canvas.width, dailyQuestionsChart.canvas.height)
        dailyTimeChart.clearRect(0, 0, dailyTimeChart.canvas.width, dailyTimeChart.canvas.height)

        document.getElementById('dailyTotalUsers').innerHTML = ''
        document.getElementById('dailyTotalConversations').innerHTML = '<span style="display:flex; width:100%; background-color: white; padding-top:80px">No Data</span>'
        document.getElementById('dailyTotalMessages').innerHTML = ''
        document.getElementById('dailyTotalQuestions').innerHTML = ''
        document.getElementById('dailyTotalTime').innerHTML = ''
      } else {
        // document.getElementById('dailyTotalConversations').innerHTML = 'Error'
      }
    })
}

// Fetch() this year's transcripts
function getYearlyTranscripts (url) {
  data = fetch(url)
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(typeFilter)

  Promise.all([
    data.then(yearlyUsersChart),
    data.then(yearlyConversationsChart),
    data.then(yearlyMessagesChart),
    data.then(yearlyQuestionsChart),
    data.then(yearlyTimeChart),
    data.then(allDailyDates),
    data.then(allMonthlyDates),
    data.then(getProfiles),
    data.then(oopsData)
  ])
    .catch((error) => {
      console.log(error)
      if (error == 'Error: The specified blob does not exist.') {
        var dailyUsersChart = document.getElementById('dailyUsersChart').getContext('2d')
        var dailyConversationsChart = document.getElementById('dailyConversationsChart').getContext('2d')
        var dailyMessagesChart = document.getElementById('dailyMessagesChart').getContext('2d')
        var dailyQuestionsChart = document.getElementById('dailyQuestionsChart').getContext('2d')
        var dailyTimeChart = document.getElementById('dailyTimeChart').getContext('2d')

        dailyUsersChart.clearRect(0, 0, dailyUsersChart.canvas.width, dailyUsersChart.canvas.height)
        dailyConversationsChart.clearRect(0, 0, dailyConversationsChart.canvas.width, dailyConversationsChart.canvas.height)
        dailyMessagesChart.clearRect(0, 0, dailyMessagesChart.canvas.width, dailyMessagesChart.canvas.height)
        dailyQuestionsChart.clearRect(0, 0, dailyQuestionsChart.canvas.width, dailyQuestionsChart.canvas.height)
        dailyTimeChart.clearRect(0, 0, dailyTimeChart.canvas.width, dailyTimeChart.canvas.height)

        document.getElementById('dailyTotalUsers').innerHTML = ''
        document.getElementById('dailyTotalConversations').innerHTML = '<span style="display:flex; width:100%; background-color: white; padding-top:80px">No Data</span>'
        document.getElementById('dailyTotalMessages').innerHTML = ''
        document.getElementById('dailyTotalQuestions').innerHTML = ''
        document.getElementById('dailyTotalTime').innerHTML = ''
      } else {
        // document.getElementById('dailyTotalConversations').innerHTML = 'Error'
      }
    })
}

// Validate fetch response for all fetch() functions
function validateResponse (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

// Set response to JSON for all fetch() functions
function readResponseAsJSON (response) {
  return response.json()
}

// Filter for Type: "trace"
function typeFilter (response) {
  var filteredResults = response.filter(type => type.Type === 'trace');
  return filteredResults
}

// Log errors for all fetch() functions
function logError (error) {
  console.log('Looks like there was a problem: \n', error)
}

/// ///////////////////
// Daily Charts Code //
/// ///////////////////

// SumArrayValue for all chart totals text
function sumArrayValues (obj) {
  return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0)
};

// Create daily users chart
function dailyUsersChart (result) {
  // Get chart data
  function getUsersByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageSenderID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getUsersByChannel(result))
  var data = Object.values(getUsersByChannel(result))
  var dailyTotalUsers = sumArrayValues(getUsersByChannel(result))

  document.getElementById('dailyTotalUsers').innerHTML = dailyTotalUsers

  // Create chart
  var ctx = document.getElementById('dailyUsersChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Users by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create daily conversations chart
function dailyConversationsChart (result) {
  // Get chart data
  function getConversationsByChannel (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.ConversationID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the ConversationID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new ConversationID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }
  // Set data and labels
  var labels = Object.keys(getConversationsByChannel(result))
  var data = Object.values(getConversationsByChannel(result))
  var dailyTotalConversations = sumArrayValues(getConversationsByChannel(result))
  document.getElementById('dailyTotalConversations').innerHTML = dailyTotalConversations

  // Create chart
  var ctx = document.getElementById('dailyConversationsChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Conversations by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create daily messages chart
function dailyMessagesChart (result) {
  // Get chart data
  function getMessagesByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getMessagesByChannel(result))
  var data = Object.values(getMessagesByChannel(result))
  var dailyTotalMessages = sumArrayValues(getMessagesByChannel(result))
  document.getElementById('dailyTotalMessages').innerHTML = dailyTotalMessages

  // Create chart
  var ctx = document.getElementById('dailyMessagesChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create daily questions chart
function dailyQuestionsChart (result) {
  // Get chart data
  function getMessages (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageText; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Sort chart keys descending
  function sortKeysDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] })
  };

  // Sort chart values descending
  function sortValuesDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] }).map(key => array[key])
  };

  // Combine chart keys and values
  function combineKeysAndValues (keys, values) {
    var result = {}
    for (var i = 0; i < keys.length; i++) { result[keys[i]] = values[i] }
    return result
  }

  var dailyArrayKeys = sortKeysDescending(getMessages(result))
  var dailyArrayValues = sortValuesDescending(getMessages(result))
  var dailyCombinedArray = combineKeysAndValues(dailyArrayKeys, dailyArrayValues)

  // Set data and labels
  var labels = Object.keys(dailyCombinedArray)
  var data = Object.values(dailyCombinedArray)

  document.getElementById('dailyTotalQuestions').innerHTML = ''

  // Create chart
  var canvas = document.getElementById('dailyQuestionsChart')
  var ctx = canvas.getContext('2d')

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

// Create daily time chart
function dailyTimeChart (result) {
  // Get chart data
  function getMessagesByHour (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = moment(item.MessageTime).format('YYYY-MM-DDTHH'); const id = item.MessageID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the MessageID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new MessageID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }
    return channels
  }

  // Push 0s where data is missing
  var timeArray = getMessagesByHour(result)

  var today = Object.keys(timeArray)
  var todayDate = moment(today[0]).format('YYYY-MM-DD')

  const timeLabels = []
  const timeData = []

  const date = moment(todayDate + 'T00:00')
  const endDate = moment(todayDate + 'T23:59')

  do {
    const dateStr = date.format('YYYY-MM-DDTHH')
    timeLabels.push(dateStr)

    if (timeArray.hasOwnProperty(dateStr)) { timeData.push(timeArray[dateStr]) } else { timeData.push(0) }

    date.add(1, 'hour')
  } while (date.isBefore(endDate))

  // Set data and labels
  var labels = timeLabels
  var data = timeData

  document.getElementById('dailyTotalTime').innerHTML = ''

  // Create chart
  var ctx = document.getElementById('dailyTimeChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              minute: 'HH:mm'
            },
            unit: 'hour',
            min: todayDate + 'T00:00',
            max: todayDate + 'T23:39'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

// Create daily raw data table
function dailyRawDataTable (result) {
  var table = document.getElementById('rawDataTable')
  document.getElementById('rawDataTable').innerHTML = '<tr><th colspan="3">Details</th><th colspan="2">Content</th><th colspan="4">Other</th><th colspan="3">IDs</th></tr><tr><th class="row-1 row-Time">Message Time</th><th class="row-2 row-Channel">Channel</th><th class="row-3 row-Sender">Sender Name</th><th class="row-4 row-Message">Message</th><th class="row-5 row-Answer">Answer</th><th class="row-6 row-QRText">Quick Reply Text</th><th class="row-7 row-QRPayload">Quick Reply Payload</th><th class="row-8 row-QnAQuestion">QnA Questions</th><th class="row-9 row-Prompts">Metadata</th><th class="row-10 row-ConversationID">Conversation ID</th><th class="row-11 row-MessageID">Message ID</th><th class="row-12 row-SenderID">Sender ID</th></tr></table>'

  result.forEach(function (object) {
    var tr = document.createElement('tr')
    var messageTime = moment(object.MessageTime).format('DD MMM HH:MM.ss')
    if (object.Question != null) {
      var question = object.Question.slice(2, -2)
    }

    tr.innerHTML =
    '<td>' + messageTime + '</td>' +
    '<td>' + object.MessageChannel + '</td>' +
    '<td>' + object.MessageSenderName + '</td>' +
    '<td>' + object.MessageText + '</td>' +
    '<td>' + object.Answer + '</td>' +
    '<td>' + object.QuickReplyDisplayText + '</td>' +
    '<td>' + object.QuickReplyPayload + '</td>' +
    '<td>' + question + '</td>' +
    '<td>' + object.Metadata + '</td>' +
    '<td>' + object.ConversationID + '</td>' +
    '<td>' + object.MessageID + '</td>' +
    '<td>' + object.MessageSenderID + '</td>'
    table.appendChild(tr)
  })
}

/// /////////////////////
// Monthly Charts Code //
/// /////////////////////

// Create monthly users chart
function monthlyUsersChart (result) {
  // Get chart data
  function getUsersByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageSenderID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getUsersByChannel(result))
  var data = Object.values(getUsersByChannel(result))
  var monthlyTotalUsers = sumArrayValues(getUsersByChannel(result))
  document.getElementById('monthlyTotalUsers').innerHTML = monthlyTotalUsers

  // Create chart
  var ctx = document.getElementById('monthlyUsersChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Users by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create monthly conversations chart
function monthlyConversationsChart (result) {
  // Get chart data
  function getConversationsByChannel (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.ConversationID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the ConversationID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new ConversationID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }
  // Set data and labels
  var labels = Object.keys(getConversationsByChannel(result))
  var data = Object.values(getConversationsByChannel(result))
  var monthlyTotalConversations = sumArrayValues(getConversationsByChannel(result))
  document.getElementById('monthlyTotalConversations').innerHTML = monthlyTotalConversations

  // Create chart
  var ctx = document.getElementById('monthlyConversationsChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Conversations by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create monthly messages chart
function monthlyMessagesChart (result) {
  // Get chart data
  function getMessagesByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getMessagesByChannel(result))
  var data = Object.values(getMessagesByChannel(result))
  var monthlyTotalMessages = sumArrayValues(getMessagesByChannel(result))
  document.getElementById('monthlyTotalMessages').innerHTML = monthlyTotalMessages

  // Create chart
  var ctx = document.getElementById('monthlyMessagesChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create monthly questions chart
function monthlyQuestionsChart (result) {
  // Get chart data
  function getMessages (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageText; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Sort chart keys descending
  function sortKeysDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] })
  };

  // Sort chart values descending
  function sortValuesDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] }).map(key => array[key])
  };

  // Combine chart keys and values
  function combineKeysAndValues (keys, values) {
    var result = {}
    for (var i = 0; i < keys.length; i++) { result[keys[i]] = values[i] }
    return result
  }

  var monthlyArrayKeys = sortKeysDescending(getMessages(result))
  var monthlyArrayValues = sortValuesDescending(getMessages(result))
  var monthlyCombinedArray = combineKeysAndValues(monthlyArrayKeys, monthlyArrayValues)

  // Set data and labels
  var labels = Object.keys(monthlyCombinedArray)
  var data = Object.values(monthlyCombinedArray)

  document.getElementById('monthlyTotalQuestions').innerHTML = ''

  // Create chart
  var ctx = document.getElementById('monthlyQuestionsChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

// Create monthly time chart
function monthlyTimeChart (result) {
  // Get chart data
  function getMessagesByDay (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = moment(item.MessageTime).format('YYYY-MM-DD'); const id = item.MessageID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the MessageID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new MessageID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }

  // Push 0s where data is missing
  var timeArray = getMessagesByDay(result)

  var month = Object.keys(timeArray)
  var selectedMonth = moment(month[0]).format('YYYY-MM')

  const timeLabels = []
  const timeData = []

  const date = moment(selectedMonth + '-01')
  const endDate = moment(selectedMonth).endOf('month')

  const endOfMonth = moment(selectedMonth).endOf('month').format('YYYY-MM-DD')

  do {
    const dateStr = date.format('YYYY-MM-DD')
    timeLabels.push(dateStr)

    if (timeArray.hasOwnProperty(dateStr)) { timeData.push(timeArray[dateStr]) } else { timeData.push(0) }

    date.add(1, 'day')
  } while (date.isBefore(endDate))

  // Set data and labels
  var labels = timeLabels
  var data = timeData

  document.getElementById('monthlyTotalTime').innerHTML = ''

  // Create chart
  var ctx = document.getElementById('monthlyTimeChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              day: 'DD MMM'
            },
            unit: 'day',
            min: selectedMonth + '-01',
            max: endOfMonth
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

/// ////////////////////
// Yearly Charts Code //
/// ////////////////////

// Create yearly users chart
function yearlyUsersChart (result) {
  // Get chart data
  function getUsersByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageSenderID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getUsersByChannel(result))
  var data = Object.values(getUsersByChannel(result))
  var yearlyTotalUsers = sumArrayValues(getUsersByChannel(result))
  document.getElementById('yearlyTotalUsers').innerHTML = yearlyTotalUsers

  // Create chart
  var ctx = document.getElementById('yearlyUsersChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Users by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create yearly conversations chart
function yearlyConversationsChart (result) {
  // Get chart data
  function getConversationsByChannel (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.ConversationID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the ConversationID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new ConversationID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }
  // Set data and labels
  var labels = Object.keys(getConversationsByChannel(result))
  var data = Object.values(getConversationsByChannel(result))
  var yearlyTotalConversations = sumArrayValues(getConversationsByChannel(result))
  document.getElementById('yearlyTotalConversations').innerHTML = yearlyTotalConversations

  // Create chart
  var ctx = document.getElementById('yearlyConversationsChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Conversations by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create yearly messages chart
function yearlyMessagesChart (result) {
  // Get chart data
  function getMessagesByChannel (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageChannel; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Set data and labels
  var labels = Object.keys(getMessagesByChannel(result))
  var data = Object.values(getMessagesByChannel(result))
  var yearlyTotalMessages = sumArrayValues(getMessagesByChannel(result))
  document.getElementById('yearlyTotalMessages').innerHTML = yearlyTotalMessages

  // Create chart
  var ctx = document.getElementById('yearlyMessagesChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Channels',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages by Channel'
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        gridLines: {
          display: false
        }
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        }
      }
    }
  })
}

// Create yearly questions chart
function yearlyQuestionsChart (result) {
  // Get chart data
  function getMessages (data, channelFilter) {
    const channels = {}

    data.forEach(item => {
      const channel = item.MessageText; const id = item.MessageID
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          channels[channel].push(id)
        }
      }
    })

    for (channel in channels) {
      channels[channel] = channels[channel].length
    }

    return channels
  };

  // Sort chart keys descending
  function sortKeysDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] })
  };

  // Sort chart values descending
  function sortValuesDescending (array) {
    var keys = keys = Object.keys(array)
    return keys.sort(function (a, b) { return array[b] - array[a] }).map(key => array[key])
  };

  // Combine chart keys and values
  function combineKeysAndValues (keys, values) {
    var result = {}
    for (var i = 0; i < keys.length; i++) { result[keys[i]] = values[i] }
    return result
  }

  var yearlyArrayKeys = sortKeysDescending(getMessages(result))
  var yearlyArrayValues = sortValuesDescending(getMessages(result))
  var yearlyCombinedArray = combineKeysAndValues(yearlyArrayKeys, yearlyArrayValues)

  // Set data and labels
  var labels = Object.keys(yearlyCombinedArray)
  var data = Object.values(yearlyCombinedArray)

  document.getElementById('yearlyTotalQuestions').innerHTML = ''

  // Create chart
  var ctx = document.getElementById('yearlyQuestionsChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

// Create yearly time chart
function yearlyTimeChart (result) {
  // Get chart data
  function getMessagesByMonth (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = moment(item.MessageTime).format('YYYY-MM'); const id = item.MessageID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the MessageID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new MessageID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }

  // Push 0s where data is missing
  var timeArray = getMessagesByMonth(result)

  const timeLabels = []
  const timeData = []

  const date = moment(thisYear + '-01')
  const endDate = moment(thisYear + '-12')
  do {
    const dateStr = date.format('YYYY-MM')
    timeLabels.push(dateStr)

    if (timeArray.hasOwnProperty(dateStr)) { timeData.push(timeArray[dateStr]) } else { timeData.push(0) }

    date.add(1, 'month')
  } while (date.isBefore(endDate))

  // Set data and labels
  var labels = timeLabels
  var data = timeData

  document.getElementById('yearlyTotalTime').innerHTML = ''

  // Create chart
  var ctx = document.getElementById('yearlyTimeChart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Messages',
        data: data
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Messages Received'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              month: 'MMM'
            },
            unit: 'month',
            min: thisYear + '-01-01T00:00',
            max: thisYear + '-12-31T23:39'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        colorschemes: {
          scheme: chartColorScheme
        },
        datalabels: {
          display: function (context) {
            return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
          }
        }
      }
    }
  })
}

// Get all dates with daily data available
function allDailyDates (result) {
  // Get dates with messages

  function getMessagesByDay (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = moment(item.MessageTime).format('YYYY-MM-DD'); const id = item.MessageID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the MessageID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new MessageID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }
    return channels
  }

  // Select just the dates
  var dates = Object.keys(getMessagesByDay(result))

  // Format the dates for flatPickr calendar
  const formatedDates = dates.map(date => {
    return moment(date).format('DD/MM/YYYY')
  })

  // Load flatpickr date selection calendar
  $(document).ready(function () {
    flatpickr('#dailyDate', {
      altInput: true,
      altFormat: 'D J F',
      dateFormat: 'd/m/Y',
      enable: formatedDates,
      defaultDate: moment(new Date()).add(-1, 'days').format('DD/MM/YY'),
      onOpen: function (selectedDates, dateStr, instance) {
        instance.setDate(instance.input.value, false)
      },
      onChange: function (selectedDates, dateStr, instance) {
        Chart.helpers.each(Chart.instances, function (instance) {
          if (instance.chart.canvas.id === "dailyUsersChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "dailyConversationsChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "dailyMessagesChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "dailyQuestionsChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "dailyTimeChart") {
            instance.destroy();
            return;
          }
        });

        var fetchDate = moment(dateStr, 'DD/MM/YYYY').format('YYYY-MM-DD')
        var fetchDataURL = 'https://mihndbotblob.blob.core.windows.net/mihndbot-transcripts/finalTranscripts/dailyTranscripts/' + fetchDate + '.json'
        getDailyTranscripts(fetchDataURL)
      }
    })
  })
}

// Get all dates with monthly data available
function allMonthlyDates (result) {
  // Get dates with messages
  function getMessagesByMonth (data, channelFilter) {
    const channels = {}

    // Loops through the data to build the `channels` object
    data.forEach(item => {
      const channel = moment(item.MessageTime).format('YYYY-MM'); const id = item.MessageID

      // Makes sure there is no filter, or channel matches filter, before proceeding
      if (!channelFilter || channelFilter === channel) {
        if (!channels[channel]) {
          // Adds a property to the `channels` object. Its value is an array including one item: the MessageID.
          channels[channel] = [id]
        } else if (!channels[channel].includes(id)) {
          // Add a new MessageID to the array for this channel
          channels[channel].push(id)
        }
      }
    })

    // Replaces the property's value with a number indicating the number of unique conversations
    for (var channel in channels) {
      // Uses `for...in` to loop through object properties
      channels[channel] = channels[channel].length
    }

    return channels
  }

  // Select just the dates
  var dates = Object.keys(getMessagesByMonth(result))

  // Format the dates for flatPickr calendar
  const formatedDates = dates.map(date => {
    return moment(date).format('MM/YYYY')
  })

  // Load flatpickr date selection calendar
  $(document).ready(function () {
    flatpickr('#monthlyDate', {
      altInput: true,
      altFormat: 'D J F',
      dateFormat: 'MM/YYYY',
      enable: formatedDates,
      defaultDate: moment(new Date()).format('MM'),
      plugins: [
        new monthSelectPlugin({
          shorthand: true, // defaults to false
          dateFormat: 'm.y', // defaults to "F Y"
          theme: 'dark' // defaults to "light"
        })
      ],
      onChange: function (selectedDates, dateStr, instance) {
        Chart.helpers.each(Chart.instances, function (instance) {
          if (instance.chart.canvas.id === "monthlyUsersChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "monthlyConversationsChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "monthlyMessagesChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "monthlyQuestionsChart") {
            instance.destroy();
            return;
          } else if (instance.chart.canvas.id === "monthlyTimeChart") {
            instance.destroy();
            return;
          }
        });

        var fetchDate = moment(dateStr, 'MM.YY').format('YYYY-MM')
        var fetchDataURL = 'https://mihndbotblob.blob.core.windows.net/mihndbot-transcripts/finalTranscripts/monthlyTranscripts/' + fetchDate + '.json'
        getMonthlyTranscripts(fetchDataURL)
      }
    })
  })
}

// Populate user profile list
function getProfiles (result) {
  var profileIDs = result.map(profile => profile.MessageSenderID)
  var distinctProfileIDs = [...new Set(profileIDs)]

  var str = '<ul id="profileList">'
  distinctProfileIDs.forEach(function (id) {
    str += '<li><a id = "profileID-' + id + '">' + id + '</a></li>'
  })

  str += '</ul>'
  document.getElementById('profileListHolder').innerHTML = str

  // Add event listeners
  document.getElementById('profileList').addEventListener('click', displayProfile)
}

// Populate user profile from MessageSenderID
function displayProfile () {
  var profileID = event.target.text

  function getUserData (url) {
    data = fetch(thisYearsDataURL)
      .then(validateResponse)
      .then(readResponseAsJSON)
      .then(typeFilter)

    Promise.all([
      data.then(userDetails),
      data.then(userTopTags),
      data.then(userTopQuestions),
      data.then(userMessages)
    ])
      .catch((error) => {
        console.log(error)
        if (error == 'Error: The specified blob does not exist.') {
          var yearlyUsersChart = document.getElementById('yearlyUsersChart').getContext('2d')
          var yearlyConversationsChart = document.getElementById('yearlyConversationsChart').getContext('2d')
          var yearlyMessagesChart = document.getElementById('yearlyMessagesChart').getContext('2d')
          var yearlyQuestionsChart = document.getElementById('yearlyQuestionsChart').getContext('2d')
          var yearlyTimeChart = document.getElementById('yearlyTimeChart').getContext('2d')

          yearlyUsersChart.clearRect(0, 0, yearlyUsersChart.canvas.width, yearlyUsersChart.canvas.height)
          yearlyConversationsChart.clearRect(0, 0, yearlyConversationsChart.canvas.width, yearlyConversationsChart.canvas.height)
          yearlyMessagesChart.clearRect(0, 0, yearlyMessagesChart.canvas.width, yearlyMessagesChart.canvas.height)
          yearlyQuestionsChart.clearRect(0, 0, yearlyQuestionsChart.canvas.width, yearlyQuestionsChart.canvas.height)
          yearlyTimeChart.clearRect(0, 0, yearlyTimeChart.canvas.width, yearlyTimeChart.canvas.height)

          document.getElementById('yearlyTotalUsers').innerHTML = '<span style="display:flex; background-color:white; padding:100px">No Data</span>'
          document.getElementById('yearlyTotalMessages').innerHTML = '<span style="display:flex; background-color:white; padding:100px">No Data</span>'
          document.getElementById('yearlyTotalConversations').innerHTML = '<span style="display:flex; background-color:white; padding:100px">No Data</span>'
          document.getElementById('yearlyTotalQuestions').innerHTML = '<span style="display:flex; width:1200px; justify-content:center; background-color:white; text-align:center; padding:100px">No Data</span>'
          document.getElementById('yearlyTotalTime').innerHTML = '<span style="display:flex; width:1200px; justify-content:center; background-color:white; padding:100px">No Data</span>'
        } else {
          document.getElementById('yearlyTotalConversations').innerHTML = 'Error'
        }
      })
  }

  function userDetails (result) {
    var filteredResult = result.filter(id => id.MessageSenderID === profileID)
    document.getElementById('profileID').innerHTML = profileID

    var userName = filteredResult.map(name => name.MessageSenderName)
    var distinctUserName = [...new Set(userName)]
    if (distinctUserName.includes(null) || distinctUserName.includes('')) {
      document.getElementById('profileName').innerHTML = 'n/a'
    } else {
      document.getElementById('profileName').innerHTML = distinctUserName
    }

    var botChannel = filteredResult.map(channel => channel.MessageChannel)
    var distinctBotChannel = [...new Set(botChannel)]
    document.getElementById('profileChannel').innerHTML = distinctBotChannel

    var userConversations = filteredResult.map(conversation => conversation.ConversationID)
    var distinctUserConversations = [...new Set(userConversations)]
    document.getElementById('numberOfConversations').innerHTML = distinctUserConversations.length

    var messageTimes = filteredResult.map(time => time.MessageTime)
    var distinctMessageTimes = [...new Set(messageTimes)]
    document.getElementById('numberOfMessages').innerHTML = distinctMessageTimes.length

    var latestInteraction = new Date(Math.max.apply(null, distinctMessageTimes.map(function (e) {
      return new Date(e)
    })))
    var formattedLatestInteraction = moment(latestInteraction).format('Do MMM YYYY @ HH:mm')
    document.getElementById('lastInteractionDate').innerHTML = formattedLatestInteraction
  }

  function userTopTags (result) {
    var filteredResult = result.filter(id => id.MessageSenderID === profileID)
    var userTags = filteredResult.map(tag => tag.Metadata)

    var groupedUserTags = userTags.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1
      return prev
    }, {})

    // Sort chart keys descending
    function sortKeysDescending (array) {
      var keys = keys = Object.keys(array)
      return keys.sort(function (a, b) { return array[b] - array[a] })
    };

    // Sort chart values descending
    function sortValuesDescending (array) {
      var keys = keys = Object.keys(array)
      return keys.sort(function (a, b) { return array[b] - array[a] }).map(key => array[key])
    };

    // Combine chart keys and values
    function combineKeysAndValues (keys, values) {
      var result = {}
      for (var i = 0; i < keys.length; i++) { result[keys[i]] = values[i] }
      return result
    }

    console.log(groupedUserTags)

    var userArrayKeys = sortKeysDescending(groupedUserTags)
    var userArrayValues = sortValuesDescending(groupedUserTags)
    var userCombinedArray = combineKeysAndValues(userArrayKeys, userArrayValues)

    // Set data and labels
    var labels = Object.keys(userCombinedArray)
    var data = Object.values(userCombinedArray)

    // Create chart
    var ctx = document.getElementById('usersTopTagsChart').getContext('2d')
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Messages',
          data: data
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Tags'
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }],
        },
        plugins: {
          colorschemes: {
            scheme: chartColorScheme
          },
          datalabels: {
            display: function (context) {
              return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
            }
          }
        }
      }
    })
  }

  function userTopQuestions (result) {
    var filteredResult = result.filter(id => id.MessageSenderID === profileID)
    var userQuestions = filteredResult.map(question => question.MessageText)

    var groupedUserQuestions = userQuestions.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1
      return prev
    }, {})

    // Sort chart keys descending
    function sortKeysDescending (array) {
      var keys = keys = Object.keys(array)
      return keys.sort(function (a, b) { return array[b] - array[a] })
    };

    // Sort chart values descending
    function sortValuesDescending (array) {
      var keys = keys = Object.keys(array)
      return keys.sort(function (a, b) { return array[b] - array[a] }).map(key => array[key])
    };

    // Combine chart keys and values
    function combineKeysAndValues (keys, values) {
      var result = {}
      for (var i = 0; i < keys.length; i++) { result[keys[i]] = values[i] }
      return result
    }

    var userArrayKeys = sortKeysDescending(groupedUserQuestions)
    var userArrayValues = sortValuesDescending(groupedUserQuestions)
    var userCombinedArray = combineKeysAndValues(userArrayKeys, userArrayValues)

    // Set data and labels
    var labels = Object.keys(userCombinedArray)
    var data = Object.values(userCombinedArray)

    // Create chart
    var ctx = document.getElementById('usersTopQuestionsChart').getContext('2d')
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Messages',
          data: data
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Questions'
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        },
        plugins: {
          colorschemes: {
            scheme: chartColorScheme
          },
          datalabels: {
            display: function (context) {
              return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
            }
          }
        }
      }
    })
  }

  function userMessages (result) {
    var filteredResult = result.filter(id => id.MessageSenderID === profileID)

    var questionArray = filteredResult.map(function (item) {
      return {
        MessageTime: item.MessageTime,
        Response: item.MessageText
      }
    })

    var answerArray = filteredResult.map(function (item) {
      return {
        MessageTime: item.MessageTime,
        Response: item.Answer
      }
    })

    var qnaArray = [...questionArray, ...answerArray];

    function compare (a, b) {
      // Use toUpperCase() to ignore character casing
      const timeA = a.MessageTime
      const timeB = b.MessageTime

      let comparison = 0
      if (timeA > timeB) {
        comparison = 1
      } else if (timeA < timeB) {
        comparison = -1
      }
      return comparison
    }

    var sortedQnAArray = qnaArray.sort(compare);
    var messages = sortedQnAArray.map(response => response.Response)

    var str = ''
    messages.forEach(function (id) {
      str += '<li><a>' + id + '</a></li>'
    })

    document.getElementById('messageList').innerHTML = str
  }

  getUserData(thisYearsDataURL)
}

// Populate oopsData Table
function oopsData (result) {
  var filteredResult = result.filter(id => id.Answer.includes('sorry'))
  var table = document.getElementById('oopsDataTable')

  filteredResult.forEach(function (object) {
    var tr = document.createElement('tr')
    var messageTime = moment(object.MessageTime).format('DD MMM HH:MM.ss')

    tr.innerHTML =
    '<td>' + messageTime + '</td>' +
    '<td>' + object.MessageChannel + '</td>' +
    '<td>' + object.MessageText + '</td>' +
    '<td>' + object.Answer + '</td>'
    table.appendChild(tr)
  })
}

/// ////////////////////
// Webpage Javascript //
/// ////////////////////

// Set tabs and divs for single page loading and navigation
function openPage (pageName, elmnt) {
  var i, chartsWrapper, pageLink
  chartsWrapper = document.getElementsByClassName('chartsWrapper')
  for (i = 0; i < chartsWrapper.length; i++) {
    chartsWrapper[i].style.display = 'none'
  }
  pageLink = document.getElementsByClassName('pageLink')
  for (i = 0; i < pageLink.length; i++) {
    pageLink[i].style.backgroundColor = ''
  }
  document.getElementById(pageName).style.display = 'flex'
  elmnt.style.backgroundColor = '#FFFFFF'
}

// Set Chart.js color scheme
var chartColorScheme = 'brewer.Blues3'

// Profile search function
function profileSearch () {
  // Declare variables
  var input, filter, ul, li, a, i
  input = document.getElementById('profileSearch')
  filter = input.value.toUpperCase()
  ul = document.getElementById('profileList')
  li = ul.getElementsByTagName('li')

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0]
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

// Message search function
function messageSearch () {
  // Declare variables
  var input, filter, ul, li, a, i
  input = document.getElementById('messageSearch')
  filter = input.value.toUpperCase()
  ul = document.getElementById('messageList')
  li = ul.getElementsByTagName('li')

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0]
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}
