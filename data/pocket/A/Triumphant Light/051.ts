import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'de-de': "Glibunkel",
		'pt-br': "Croagunk",
		'ko-kr': "삐딱구리"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [453],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
		'fr-fr': "Il fait gonfler ses glandes venimeuses tout en émettant un son\neffrayant, ce qui lui permet d'empoisonner ses proies pétrifiées.",
		'es-es': "Infla sus bolsas venenosas para emitir un sonido macabro\na su alrededor y envenena al rival en cuanto se amedrenta.",
		'it-it': "Gonfia le sue sacche di veleno emettendo un verso\nsinistro che fa impietrire l'avversario, poi lo avvelena.",
		'de-de': "Bläst es seine Giftbeutel auf, ertönt ein\nunheimliches Geräusch. Wenn Gegner\ndadurch zurückschrecken, vergiftet es sie.",
		'pt-br': "Ao inflar suas bolsas de veneno, preenche a área\ncom um som peculiar e acerta os oponentes assustados\ncom um soco venenoso.",
		'ko-kr': "독주머니를 부풀리며 울어서\n주변에 으스스한 소리를 퍼트린 후\n상대가 풀죽으면 독찌르기를 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'de-de': "Verprügler",
			'pt-br': "Pulso",
			'ko-kr': "때리기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
