import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Moltres V",
		fr: "Sulfura de Galar V",
		es: "Moltres de Galar V",
		it: "Moltres di Galar V",
		pt: "Moltres de Galar V",
		de: "Galar-Lavados V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,
	dexId: [146],

	types: [
		"Darkness",
	],

	stage: 'Basic',
	suffix: 'V',

	abilities: [{
		type: "Ability",
		name: {
			en: "Direflame Wings",
			fr: "Ailes Ténébraises",
			es: "Alas Incendiarias",
			it: "Ali Estremafiamma",
			pt: "Asas de Fogaréu",
			de: "Flammende Schattenflügel"
		},
		effect: {
			en: "Once during your turn, you may attach a Darkness Energy card from your discard pile to this Pokémon. You can't use more than 1 Direflame Wings Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à ce Pokémon. Vous ne pouvez utiliser qu'un talent Ailes Ténébraises par tour.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Darkness de tu pila de descartes a este Pokémon. No puedes usar más de 1 habilidad Alas Incendiarias en cada turno.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia Darkness dalla tua pila degli scarti. Puoi usare l'abilità Ali Estremafiamma solo una volta per turno.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon. Você não pode usar mais de 1 Habilidade Asas de Fogaréu por turno.",
			de: "Einmal während deines Zuges kannst du 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen. Du kannst immer nur jeweils 1 Fähigkeit Flammende Schattenflügel einsetzen."
		}
	}],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			name: {
				en: "Aura Burn",
				fr: "Aura Ardente",
				es: "Aura Abrasadora",
				it: "Scottaura",
				pt: "Aura Ardente",
				de: "Aurabrand"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 190
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
