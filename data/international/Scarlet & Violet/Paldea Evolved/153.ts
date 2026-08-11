import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		'fr-fr': "Bruyverne-ex",
		'en-us': "Noivern ex",
		'es-es': "Noivern ex",
		'it-it': "Noivern-ex",
		'pt-br': "Noivern ex",
		'de-de': "UHaFnir-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Sonistrelle",
		'en-us': "Noibat",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Vol à Couvert",
			'en-us': "Covert Flight",
			'es-es': "Vuelo Encubierto",
			'it-it': "Volo Segreto",
			'pt-br': "Voo Discreto",
			'de-de': "Tarnflug"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 70
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'fr-fr': "Écho Dominant",
			'en-us': "Dominating Echo",
			'es-es': "Eco Dominante",
			'it-it': "Eco Dominante",
			'pt-br': "Eco Dominante",
			'de-de': "Dominantes Echo"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main.",
			'en-us': "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Energía Especial o de Estadio de su mano.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Energia speciale o Stadio che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Energia Especial ou de Estádio da mão dele.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
		},

		damage: 140
	}],

	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715628,
				tcgplayer: 497571,
				cardtrader: 248802
			}
		},
	],

	suffix: "ex",
	illustrator: "Nisota Niso",

	
}

export default card
