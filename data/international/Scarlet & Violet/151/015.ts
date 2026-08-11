import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [15],
	set: Set,

	name: {
		'fr-fr': "Dardargnan",
		'en-us': "Beedrill",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Coconfort",
		'en-us': "Kakuna",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Aiguille Nadir",
			'en-us': "Nadir Needle",
			'es-es': "Aguijón Nadir",
			'it-it': "Aculeo Distruttivo",
			'pt-br': "Agulha das Profundezas",
			'de-de': "Nadirnadel"
		},

		effect: {
			'fr-fr': "Si vous n'avez aucune carte dans votre main, cette attaque inflige 120 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			'en-us': "If you have no cards in your hand, this attack does 120 more damage, and your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 120 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'it-it': "Se non hai carte in mano, questo attacco infligge 120 danni in più e il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 120 pontos de dano a mais, e o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 120 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733610,
				tcgplayer: 502564,
				cardtrader: 261062
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733610,
				tcgplayer: 502564,
				cardtrader: 261062
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
