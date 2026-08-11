import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Swelling Flash",
			'fr-fr': "Flash Grandissant",
			'es-es': "Destello Creciente",
			'it-it': "Bagliore Amplificato",
			'pt-br': "Clarão Crescente",
			'de-de': "Anschwellender Blitz"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in your hand and you have more Prize cards remaining than your opponent, you may put this Pokémon onto your Bench.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est dans votre main et qu'il vous reste plus de cartes Récompense qu'à votre adversaire, vous pouvez placer ce Pokémon sur votre Banc.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu mano y te quedan más cartas de Premio que a tu rival, puedes poner este Pokémon en tu Banca.",
			'it-it': "Una sola volta durante il tuo turno, se hai questo Pokémon in mano e più carte Premio rimanenti del tuo avversario, puoi mettere questo Pokémon nella tua panchina.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver na sua mão e você tiver mais cartas de Prêmio restantes do que seu oponente, você poderá colocar este Pokémon no seu Banco.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Hand ist und du mehr verbleibende Preiskarten hast als dein Gegner, kannst du dieses Pokémon auf deine Bank legen."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Wild Charge",
			'fr-fr': "Éclair Fou",
			'es-es': "Voltio Cruel",
			'it-it': "Sprizzalampo",
			'pt-br': "Ataque Selvagem",
			'de-de': "Stromstoß"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751676,
				tcgplayer: 534533,
				cardtrader: 274320
			}
		},
	],

	illustrator: "kantaro",

	description: {
		'en-us': "It can see clearly through walls to track down its prey and seek its lost young.",
	},

}

export default card
