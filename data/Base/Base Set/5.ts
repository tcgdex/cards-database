import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi",
		pt: "Clefairy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sing",
				fr: "Berceuse",
				de: "Gesang",
				pt: "Canto"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon schlafend.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Defensor está Adormecido."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metronome",
				fr: "Métronome",
				de: "Metronom",
				pt: "Metrônomo"
			},
			effect: {
				en: "Choose 1 of Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding energy cards. (No matter what type the defender is, Clefairy's type is still Colorless.)",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Métronome copie cette attaque à l'exception de son coût d'Énergie et de toute autre action requise pour utiliser cette attaque, comme par exemple, défausser des cartes Énergie. (Quel que soit le type du Pokémon Défenseur, Mélofée demeure de type Incolore.)",
				de: "Wähle einen der Angriffe des verteidigenden Pokémon. Metronom kopiert diesen Angriff, außer seiner Energiekosten und was sonst noch für den Einsatz dieses Angriffs erforderlich ist, wie z.B. das Entfernen von Energiekarten. (Unabhängig vom Typ des Verteidigenden Pokémon ist der Typ der Piepi immer noch farblos.)",
				pt: "Escolha 1 dos ataques do Pokémon Defensor. Metrônomo copia este ataque, exceto pelo custo de energia e qualquer outra coisa necessária para usar este ataque, como descartar cartas de energia. (Independentemente do tipo do Pokémon Defensor, Clefairy é sempre do tipo Incolor.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Très recherché pour son aura mystique, il est très rare et ne vit que dans des endroits précis.",
		pt: "Extremamente raro por causa de sua aura mística, ele vive apenas em locais específicos.",
		en: "Extremely rare due to its mystical aura, it lives only in specific places."
	}
}

export default card
