import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'fr-fr': "Sulfura de Galar V",
		'en-us': "Galarian Moltres V",
		'es-es': "Moltres de Galar V",
		'it-it': "Moltres di Galar V",
		'pt-br': "Moltres de Galar V",
		'de-de': "Galar-Lavados V"
	},

	illustrator: "Shibuzoh.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Ailes Ténébraises",
			'en-us': "Direflame Wings",
			'es-es': "Alas Incendiarias",
			'it-it': "Ali Estremafiamma",
			'pt-br': "Asas de Fogaréu",
			'de-de': "Flammende Schattenflügel"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à ce Pokémon. Vous ne pouvez utiliser qu'un talent Ailes Ténébraises par tour.",
			'en-us': "Once during your turn, you may attach a Darkness Energy card from your discard pile to this Pokémon. You can't use more than 1 Direflame Wings Ability each turn.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Darkness de tu pila de descartes a este Pokémon. No puedes usar más de 1 habilidad Alas Incendiarias en cada turno.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia Darkness dalla tua pila degli scarti. Puoi usare l'abilità Ali Estremafiamma solo una volta per turno.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon. Você não pode usar mais de 1 Habilidade Asas de Fogaréu por turno.",
			'de-de': "Einmal während deines Zuges kannst du 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen. Du kannst immer nur jeweils 1 Fähigkeit Flammende Schattenflügel einsetzen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Aura Ardente",
			'en-us': "Aura Burn",
			'es-es': "Aura Abrasadora",
			'it-it': "Scottaura",
			'pt-br': "Aura Ardente",
			'de-de': "Aurabrand"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567285,
				tcgplayer: 241768
			}
		},
	],
}

export default card
