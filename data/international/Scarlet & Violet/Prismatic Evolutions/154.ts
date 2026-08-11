import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [992],
	set: Set,

	name: {
		'en-us': "Iron Hands ex",
		'fr-fr': "Paume-de-Fer-ex",
		'es-es': "Ferropalmas ex",
		'pt-br': "Mãos Férreas ex",
		'it-it': "Manoferrea-ex",
		'de-de': "Eisenhand-ex"
	},

	rarity: "Special illustration rare",
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
			'pt-br': "Compressão de Braço",
			'it-it': "Pressabraccio",
			'de-de': "Armpresse"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Amp You Very Much",
			'fr-fr': "Multi Beaucoup",
			'es-es': "Gracias Amplificadas",
			'pt-br': "Gratiluz",
			'it-it': "Mille Volt Grazie",
			'de-de': "Amplifizierter Dank"
		},

		effect: {
			'en-us': "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			'es-es': "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
			'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
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

	suffix: "ex",
	illustrator: "Kazumasa Yasukuni",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805548,
				tcgplayer: 610509
			}
		},
	],
}

export default card
