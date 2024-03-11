"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/normalize-range";
exports.ids = ["vendor-chunks/normalize-range"];
exports.modules = {

/***/ "(ssr)/./node_modules/normalize-range/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-range/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    wrap: wrapRange,\n    limit: limitRange,\n    validate: validateRange,\n    test: testRange,\n    curry: curry,\n    name: name\n};\nfunction wrapRange(min, max, value) {\n    var maxLessMin = max - min;\n    return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;\n}\nfunction limitRange(min, max, value) {\n    return Math.max(min, Math.min(max, value));\n}\nfunction validateRange(min, max, value, minExclusive, maxExclusive) {\n    if (!testRange(min, max, value, minExclusive, maxExclusive)) {\n        throw new Error(value + \" is outside of range [\" + min + \",\" + max + \")\");\n    }\n    return value;\n}\nfunction testRange(min, max, value, minExclusive, maxExclusive) {\n    return !(value < min || value > max || maxExclusive && value === max || minExclusive && value === min);\n}\nfunction name(min, max, minExcl, maxExcl) {\n    return (minExcl ? \"(\" : \"[\") + min + \",\" + max + (maxExcl ? \")\" : \"]\");\n}\nfunction curry(min, max, minExclusive, maxExclusive) {\n    var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);\n    return {\n        wrap: wrapRange.bind(null, min, max),\n        limit: limitRange.bind(null, min, max),\n        validate: function(value) {\n            return validateRange(min, max, value, minExclusive, maxExclusive);\n        },\n        test: function(value) {\n            return testRange(min, max, value, minExclusive, maxExclusive);\n        },\n        toString: boundNameFn,\n        name: boundNameFn\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXJhbmdlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE9BQU9DLE9BQU8sR0FBRztJQUNmQyxNQUFNQztJQUNOQyxPQUFPQztJQUNQQyxVQUFVQztJQUNWQyxNQUFNQztJQUNOQyxPQUFPQTtJQUNQQyxNQUFNQTtBQUNSO0FBRUEsU0FBU1IsVUFBVVMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUs7SUFDaEMsSUFBSUMsYUFBYUYsTUFBTUQ7SUFDdkIsT0FBTyxDQUFDLENBQUNFLFFBQVFGLEdBQUUsSUFBS0csYUFBYUEsVUFBUyxJQUFLQSxhQUFhSDtBQUNsRTtBQUVBLFNBQVNQLFdBQVdPLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLO0lBQ2pDLE9BQU9FLEtBQUtILEdBQUcsQ0FBQ0QsS0FBS0ksS0FBS0osR0FBRyxDQUFDQyxLQUFLQztBQUNyQztBQUVBLFNBQVNQLGNBQWNLLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVHLFlBQVksRUFBRUMsWUFBWTtJQUNoRSxJQUFJLENBQUNULFVBQVVHLEtBQUtDLEtBQUtDLE9BQU9HLGNBQWNDLGVBQWU7UUFDM0QsTUFBTSxJQUFJQyxNQUFNTCxRQUFRLDJCQUEyQkYsTUFBTSxNQUFNQyxNQUFNO0lBQ3ZFO0lBQ0EsT0FBT0M7QUFDVDtBQUVBLFNBQVNMLFVBQVVHLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVHLFlBQVksRUFBRUMsWUFBWTtJQUM1RCxPQUFPLENBQ0ZKLENBQUFBLFFBQVFGLE9BQ1JFLFFBQVFELE9BQ1BLLGdCQUFpQkosVUFBVUQsT0FDM0JJLGdCQUFpQkgsVUFBVUYsR0FBSTtBQUV2QztBQUVBLFNBQVNELEtBQUtDLEdBQUcsRUFBRUMsR0FBRyxFQUFFTyxPQUFPLEVBQUVDLE9BQU87SUFDdEMsT0FBTyxDQUFDRCxVQUFVLE1BQU0sR0FBRSxJQUFLUixNQUFNLE1BQU1DLE1BQU9RLENBQUFBLFVBQVUsTUFBTSxHQUFFO0FBQ3RFO0FBRUEsU0FBU1gsTUFBTUUsR0FBRyxFQUFFQyxHQUFHLEVBQUVJLFlBQVksRUFBRUMsWUFBWTtJQUNqRCxJQUFJSSxjQUFjWCxLQUFLWSxJQUFJLENBQUMsTUFBTVgsS0FBS0MsS0FBS0ksY0FBY0M7SUFDMUQsT0FBTztRQUNMaEIsTUFBTUMsVUFBVW9CLElBQUksQ0FBQyxNQUFNWCxLQUFLQztRQUNoQ1QsT0FBT0MsV0FBV2tCLElBQUksQ0FBQyxNQUFNWCxLQUFLQztRQUNsQ1AsVUFBVSxTQUFTUSxLQUFLO1lBQ3RCLE9BQU9QLGNBQWNLLEtBQUtDLEtBQUtDLE9BQU9HLGNBQWNDO1FBQ3REO1FBQ0FWLE1BQU0sU0FBU00sS0FBSztZQUNsQixPQUFPTCxVQUFVRyxLQUFLQyxLQUFLQyxPQUFPRyxjQUFjQztRQUNsRDtRQUNBTSxVQUFVRjtRQUNWWCxNQUFNVztJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb29nbGUtbmV4dC8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtcmFuZ2UvaW5kZXguanM/ZWI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd3JhcDogd3JhcFJhbmdlLFxuICBsaW1pdDogbGltaXRSYW5nZSxcbiAgdmFsaWRhdGU6IHZhbGlkYXRlUmFuZ2UsXG4gIHRlc3Q6IHRlc3RSYW5nZSxcbiAgY3Vycnk6IGN1cnJ5LFxuICBuYW1lOiBuYW1lXG59O1xuXG5mdW5jdGlvbiB3cmFwUmFuZ2UobWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciBtYXhMZXNzTWluID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCh2YWx1ZSAtIG1pbikgJSBtYXhMZXNzTWluICsgbWF4TGVzc01pbikgJSBtYXhMZXNzTWluICsgbWluO1xufVxuXG5mdW5jdGlvbiBsaW1pdFJhbmdlKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmFuZ2UobWluLCBtYXgsIHZhbHVlLCBtaW5FeGNsdXNpdmUsIG1heEV4Y2x1c2l2ZSkge1xuICBpZiAoIXRlc3RSYW5nZShtaW4sIG1heCwgdmFsdWUsIG1pbkV4Y2x1c2l2ZSwgbWF4RXhjbHVzaXZlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcih2YWx1ZSArICcgaXMgb3V0c2lkZSBvZiByYW5nZSBbJyArIG1pbiArICcsJyArIG1heCArICcpJyk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0ZXN0UmFuZ2UobWluLCBtYXgsIHZhbHVlLCBtaW5FeGNsdXNpdmUsIG1heEV4Y2x1c2l2ZSkge1xuICByZXR1cm4gIShcbiAgICAgICB2YWx1ZSA8IG1pbiB8fFxuICAgICAgIHZhbHVlID4gbWF4IHx8XG4gICAgICAgKG1heEV4Y2x1c2l2ZSAmJiAodmFsdWUgPT09IG1heCkpIHx8XG4gICAgICAgKG1pbkV4Y2x1c2l2ZSAmJiAodmFsdWUgPT09IG1pbikpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG5hbWUobWluLCBtYXgsIG1pbkV4Y2wsIG1heEV4Y2wpIHtcbiAgcmV0dXJuIChtaW5FeGNsID8gJygnIDogJ1snKSArIG1pbiArICcsJyArIG1heCArIChtYXhFeGNsID8gJyknIDogJ10nKTtcbn1cblxuZnVuY3Rpb24gY3VycnkobWluLCBtYXgsIG1pbkV4Y2x1c2l2ZSwgbWF4RXhjbHVzaXZlKSB7XG4gIHZhciBib3VuZE5hbWVGbiA9IG5hbWUuYmluZChudWxsLCBtaW4sIG1heCwgbWluRXhjbHVzaXZlLCBtYXhFeGNsdXNpdmUpO1xuICByZXR1cm4ge1xuICAgIHdyYXA6IHdyYXBSYW5nZS5iaW5kKG51bGwsIG1pbiwgbWF4KSxcbiAgICBsaW1pdDogbGltaXRSYW5nZS5iaW5kKG51bGwsIG1pbiwgbWF4KSxcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZVJhbmdlKG1pbiwgbWF4LCB2YWx1ZSwgbWluRXhjbHVzaXZlLCBtYXhFeGNsdXNpdmUpO1xuICAgIH0sXG4gICAgdGVzdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0UmFuZ2UobWluLCBtYXgsIHZhbHVlLCBtaW5FeGNsdXNpdmUsIG1heEV4Y2x1c2l2ZSk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogYm91bmROYW1lRm4sXG4gICAgbmFtZTogYm91bmROYW1lRm5cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwid3JhcCIsIndyYXBSYW5nZSIsImxpbWl0IiwibGltaXRSYW5nZSIsInZhbGlkYXRlIiwidmFsaWRhdGVSYW5nZSIsInRlc3QiLCJ0ZXN0UmFuZ2UiLCJjdXJyeSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJ2YWx1ZSIsIm1heExlc3NNaW4iLCJNYXRoIiwibWluRXhjbHVzaXZlIiwibWF4RXhjbHVzaXZlIiwiRXJyb3IiLCJtaW5FeGNsIiwibWF4RXhjbCIsImJvdW5kTmFtZUZuIiwiYmluZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/normalize-range/index.js\n");

/***/ })

};
;