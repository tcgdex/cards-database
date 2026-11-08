import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'de-de': "Kramurx",
		'pt-br': "Murkrow",
		'ko-kr': "니로우"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [198],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
		'fr-fr': "Ce Pokémon redouté et peu aimé porterait\nmalheur à quiconque l'aperçoit la nuit.",
		'es-es': "Temido y odiado por muchos, dicen que trae la\ndesgracia a todos aquellos que lo ven por la noche.",
		'it-it': "Molti lo temono e lo detestano credendo che\nporti sfortuna a chiunque lo veda di notte.",
		'de-de': "Viele verabscheuen und hassen es, da sie\nglauben, es bringe Unglück, wenn sie ihm\nnachts begegnen.",
		'pt-br': "Temido e detestado por muitos, acredita-se que traz\nmá sorte para todos que o veem à noite.",
		'ko-kr': "밤에 모습을 보게 되면\n불길한 일이 생긴다고 여겨져\n몹시 미움받는 포켓몬이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'de-de': "Pikser",
			'pt-br': "Bicada",
			'ko-kr': "쪼기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
