import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		de: "Rexblisar",
		'pt-br': "Abomasnow",
		ko: "눈설왕"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Snover"
	},

	description: {
		en: "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
		fr: "Il vit paisiblement dans les massifs où s'amoncellent les neiges\néternelles, et il déclenche des blizzards pour se cacher.",
		es: "Vive en paz en cordilleras de nieves eternas.\nGenera ventiscas para ocultarse.",
		it: "Vive nella pace delle cime montuose tra le nevi\nperenni. Si nasconde scatenando bufere di neve.",
		de: "Es führt ein ruhiges Leben im Gebirge, wo\newiger Schnee liegt, und löst Blizzards aus,\num sich zu verstecken.",
		'pt-br': "Leva uma vida tranquila em montanhas que estão\npermanentemente cobertas de neve. Ele se esconde\nprovocando nevascas.",
		ko: "만년설이 쌓인 산맥에서 조용히 지낸다.\n블리자드를 발생시켜 모습을 감춘다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vigor Link"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, attacks used by this Pokémon cost 1 less <span class=\"energy-text energy-text--type-colorless\"></span> Energy."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card
