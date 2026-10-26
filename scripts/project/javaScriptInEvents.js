

const scriptsInEvents = {

	async Pa_Event11_Act1(runtime, localVars)
	{
		// Ses konumuna bağlı; tekrar dinleme ve durdurma otomatik olarak sıfırlanır.
		const cues = [{"card": [18, 710, 701, 312, 381], "letter": [54, 703, 642, 115, 114], "start": 0.232104, "end": 0.624625}, {"card": [6, 974, 701, 312, 381], "letter": [58, 966, 642, 115, 114], "start": 1.64606, "end": 2.01717}, {"card": [19, 1239, 701, 312, 381], "letter": [60, 1233, 642, 87, 114], "start": 3.02646, "end": 3.3889400000000003}, {"card": [20, 1498, 701, 312, 381], "letter": [61, 1497, 642, 119, 114], "start": 4.59342, "end": 4.99742}, {"card": [21, 1756, 701, 312, 381], "letter": [62, 1754, 642, 119, 114], "start": 6.14894, "end": 6.51273}];
		const t = runtime.globalVars.HeceSesZamani_pa;
		for (const cue of cues) {
		    let pulse = 0;
		    if (t >= cue.start && t <= cue.end) {
		        const progress = (t - cue.start) / (cue.end - cue.start);
		        pulse = Math.sin(Math.PI * progress);
		    }
		    const scale = 1 + 0.035 * pulse;
		    const card = runtime.getInstanceByUid(cue.card[0]);
		    if (!card) continue;
		    card.setPosition(cue.card[1], cue.card[2] - 9 * pulse);
		    card.setSize(cue.card[3] * scale, cue.card[4] * scale);
		    card.colorRgb = [1, 1 - 0.24 * pulse, 1];
		    const letter = runtime.getInstanceByUid(cue.letter[0]);
		    if (letter) {
		        letter.setPosition(cue.card[1] + (cue.letter[1] - cue.card[1]) * scale,
		            cue.card[2] - 9 * pulse + (cue.letter[2] - cue.card[2]) * scale);
		        letter.setSize(cue.letter[3] * scale, cue.letter[4] * scale);
		    }
		}
	},

	async Ta_Event11_Act1(runtime, localVars)
	{
		// Ses konumuna bağlı; tekrar dinleme ve durdurma otomatik olarak sıfırlanır.
		const cues = [{"card": [22, 722, 701, 312, 381], "letter": [63, 718, 642, 95, 114], "start": 0.23691700000000002, "end": 0.6427499999999999}, {"card": [23, 985, 701, 312, 381], "letter": [93, 979, 642, 94, 114], "start": 1.7495, "end": 2.15381}, {"card": [24, 1243, 701, 312, 381], "letter": [64, 1231, 642, 67, 114], "start": 3.38585, "end": 3.7704}, {"card": [41, 1504, 701, 312, 381], "letter": [65, 1499, 642, 98, 114], "start": 5.01323, "end": 5.4435}, {"card": [92, 1765, 701, 312, 381], "letter": [66, 1756, 642, 98, 114], "start": 6.5056199999999995, "end": 6.85412}];
		const t = runtime.globalVars.HeceSesZamani_ta;
		for (const cue of cues) {
		    let pulse = 0;
		    if (t >= cue.start && t <= cue.end) {
		        const progress = (t - cue.start) / (cue.end - cue.start);
		        pulse = Math.sin(Math.PI * progress);
		    }
		    const scale = 1 + 0.035 * pulse;
		    const card = runtime.getInstanceByUid(cue.card[0]);
		    if (!card) continue;
		    card.setPosition(cue.card[1], cue.card[2] - 9 * pulse);
		    card.setSize(cue.card[3] * scale, cue.card[4] * scale);
		    card.colorRgb = [1, 1 - 0.24 * pulse, 1];
		    const letter = runtime.getInstanceByUid(cue.letter[0]);
		    if (letter) {
		        letter.setPosition(cue.card[1] + (cue.letter[1] - cue.card[1]) * scale,
		            cue.card[2] - 9 * pulse + (cue.letter[2] - cue.card[2]) * scale);
		        letter.setSize(cue.letter[3] * scale, cue.letter[4] * scale);
		    }
		}
	},

	async Ca_Event11_Act1(runtime, localVars)
	{
		// Ses konumuna bağlı; tekrar dinleme ve durdurma otomatik olarak sıfırlanır.
		const cues = [{"card": [43, 731, 701, 312, 381], "letter": [67, 722, 642, 103, 114], "start": 0.40620799999999996, "end": 0.824542}, {"card": [44, 987, 701, 312, 381], "letter": [68, 985, 642, 101, 114], "start": 1.78054, "end": 2.18335}, {"card": [45, 1251, 701, 312, 381], "letter": [71, 1238, 642, 74, 114], "start": 3.41479, "end": 3.83198}, {"card": [46, 1508, 701, 312, 381], "letter": [77, 1495, 642, 105, 114], "start": 5.013669999999999, "end": 5.48365}, {"card": [47, 1764, 701, 312, 381], "letter": [78, 1761, 642, 106, 114], "start": 6.635619999999999, "end": 7.0427100000000005}];
		const t = runtime.globalVars.HeceSesZamani_ca;
		for (const cue of cues) {
		    let pulse = 0;
		    if (t >= cue.start && t <= cue.end) {
		        const progress = (t - cue.start) / (cue.end - cue.start);
		        pulse = Math.sin(Math.PI * progress);
		    }
		    const scale = 1 + 0.035 * pulse;
		    const card = runtime.getInstanceByUid(cue.card[0]);
		    if (!card) continue;
		    card.setPosition(cue.card[1], cue.card[2] - 9 * pulse);
		    card.setSize(cue.card[3] * scale, cue.card[4] * scale);
		    card.colorRgb = [1, 1 - 0.24 * pulse, 1];
		    const letter = runtime.getInstanceByUid(cue.letter[0]);
		    if (letter) {
		        letter.setPosition(cue.card[1] + (cue.letter[1] - cue.card[1]) * scale,
		            cue.card[2] - 9 * pulse + (cue.letter[2] - cue.card[2]) * scale);
		        letter.setSize(cue.letter[3] * scale, cue.letter[4] * scale);
		    }
		}
	},

	async Ra_Event11_Act1(runtime, localVars)
	{
		// Ses konumuna bağlı; tekrar dinleme ve durdurma otomatik olarak sıfırlanır.
		const cues = [{"card": [48, 725, 701, 312, 381], "letter": [79, 720, 642, 94, 114], "start": 0.174563, "end": 0.653625}, {"card": [49, 985, 701, 312, 381], "letter": [80, 979, 641, 94, 114], "start": 1.48635, "end": 1.96421}, {"card": [50, 1239, 701, 312, 381], "letter": [81, 1225, 646, 66, 114], "start": 2.83671, "end": 3.27596}, {"card": [51, 1502, 701, 312, 381], "letter": [94, 1494, 642, 97, 114], "start": 4.25362, "end": 4.78135}, {"card": [91, 1765, 701, 312, 381], "letter": [82, 1755, 642, 98, 114], "start": 5.711189999999999, "end": 6.17271}];
		const t = runtime.globalVars.HeceSesZamani_ra;
		for (const cue of cues) {
		    let pulse = 0;
		    if (t >= cue.start && t <= cue.end) {
		        const progress = (t - cue.start) / (cue.end - cue.start);
		        pulse = Math.sin(Math.PI * progress);
		    }
		    const scale = 1 + 0.035 * pulse;
		    const card = runtime.getInstanceByUid(cue.card[0]);
		    if (!card) continue;
		    card.setPosition(cue.card[1], cue.card[2] - 9 * pulse);
		    card.setSize(cue.card[3] * scale, cue.card[4] * scale);
		    card.colorRgb = [1, 1 - 0.24 * pulse, 1];
		    const letter = runtime.getInstanceByUid(cue.letter[0]);
		    if (letter) {
		        letter.setPosition(cue.card[1] + (cue.letter[1] - cue.card[1]) * scale,
		            cue.card[2] - 9 * pulse + (cue.letter[2] - cue.card[2]) * scale);
		        letter.setSize(cue.letter[3] * scale, cue.letter[4] * scale);
		    }
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
