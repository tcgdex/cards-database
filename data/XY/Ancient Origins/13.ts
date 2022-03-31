import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flare Effect",
				fr: "Effet Flamboyant",
				es: "Efecto Ígneo",
				it: "Fuocoeffetto",
				pt: "Efeito de Labareda",
				de: "Feuer-Effekt"
			},
			effect: {
				en: "Each of your Stage 1 Pokémon in play is now a Fire Pokémon in addition to its existing types.",
				fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Fire en plus de ses types existants.",
				es: "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Fire además de sus tipos actuales.",
				it: "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Fire in aggiunta ai suoi tipi originari.",
				pt: "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Fire, além dos seus tipos existentes.",
				de: "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Fire-Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Breath",
				fr: "Souffle Ardent",
				es: "Aliento Ardiente",
				it: "Alitorovente",
				pt: "Bafo de Calor",
				de: "Heißer Atem"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
