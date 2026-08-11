import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		'en-us': "Blissey V",
		'fr-fr': "Leuphorie V",
		'es-es': "Blissey V",
		'it-it': "Blissey V",
		'pt-br': "Blissey V",
		'de-de': "Heiteira V"
	},

	illustrator: "You Iribi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Natural Cure",
			'fr-fr': "Remède Naturel",
			'es-es': "Cura Natural",
			'it-it': "Naturcura",
			'pt-br': "Cura Natural",
			'de-de': "Innere Kraft"
		},

		effect: {
			'en-us': "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
			'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
			'es-es': "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
			'it-it': "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
			'pt-br': "Sempre que ligar 1 carta de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
			'de-de': "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Blissful Blast",
			'fr-fr': "Explosion Euphorique",
			'es-es': "Explosión Feliz",
			'it-it': "Esplosione Gioiosa",
			'pt-br': "Explosão Maravilhosa",
			'de-de': "Heiterer Hieb"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to this Pokémon. If you did any damage with this attack, you may attach up to 3 Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher jusqu'à 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida a este Pokémon. Si has infligido daño con este ataque, puedes unir hasta 3 cartas de Energía de tu pila de descartes a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata a questo Pokémon. Sei hai inflitto dei danni con questo attacco, puoi assegnare a questo Pokémon fino a tre carte Energia dalla tua pila degli scarti.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada a este Pokémon. Se tiver causado qualquer dano com este ataque, você poderá ligar até 3 cartas de Energia da sua pilha de descarte a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte mehr zu. Wenn du mit dieser Attacke Schaden zugefügt hast, kannst du bis zu 3 Energiekarten aus deinem Ablagestapel an dieses Pokémon anlegen."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682286,
				tcgplayer: 452037
			}
		},
	],
}

export default card
