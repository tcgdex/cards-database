import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [992],
	set: Set,

	name: {
		'en-us': "Iron Hands ex",
		'fr-fr': "Paume-de-Fer-ex",
		'es-es': "Ferropalmas ex",
		'it-it': "Manoferrea-ex",
		'pt-br': "Mãos Férreas ex",
		'de-de': "Eisenhand-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Arm Press",
			'fr-fr': "Pression des Bras",
			'es-es': "Prensa de Brazo",
			'it-it': "Pressabraccio",
			'pt-br': "Compressão de Braço",
			'de-de': "Armpresse"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Amp You Very Much",
			'fr-fr': "Multi Beaucoup",
			'es-es': "Gracias Amplificadas",
			'it-it': "Mille Volt Grazie",
			'pt-br': "Gratiluz",
			'de-de': "Amplifizierter Dank"
		},

		effect: {
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			'es-es': "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740766,
				tcgplayer: 523904,
				cardtrader: 265338
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
