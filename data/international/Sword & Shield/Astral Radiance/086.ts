import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		'en-us': "Kleavor",
		'fr-fr': "Hachécateur",
		'es-es': "Kleavor",
		'it-it': "Kleavor",
		'pt-br': "Kleavor",
		'de-de': "Axantor"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Timber Cleave",
			'fr-fr': "Découpe Bois",
			'es-es': "Cortamadera",
			'it-it': "Fendente Legnoso",
			'pt-br': "Cutelo de Madeira",
			'de-de': "Baumspalter"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			'es-es': "Lanza 2 monedas. Si ambas son cara, el Pokémon Activo de tu rival queda Fuera de Combate.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, ist das Aktive Pokémon deines Gegners kampfunfähig."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Berserker Tackle",
			'fr-fr': "Charge Folle",
			'es-es': "Placaje Locura",
			'it-it': "Assalto Brado",
			'pt-br': "Investida Frenética",
			'de-de': "Berserkerwut"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "A violent creature that fells towering trees with its crude axes and shields itself with hard stone. If one should chance upon this Pokémon in the wilds, one's only recourse is to flee.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658703,
				tcgplayer: 272287
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658703,
				tcgplayer: 272287
			}
		},
	],
}

export default card
