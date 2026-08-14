import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 30,

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
				en: "Snivel",
				fr: "Pleurnicherie",
				de: "Geschniefe"
			},
			effect: {
				en: "If the Defending Pokémon attacks Togepi during your opponent's next turn, any damage done to Togepi is reduced by 20 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Togepi durant le prochain tour de votre adversaire, tous les dégâts infligés à Togepi sont réduits de 20 (après avoir appliqué Faiblesse et Résistance). (Mettre l'un des deux Pokémon sur le Banc met fin à cet effet.)",
				de: "Wenn das verteidigende Pokémon Togepi während des nächsten Zugs deines Gegner angreift, reduziere allen Schaden, der Togepi zugefügt wird, um 20 (nachdem Schwäche und Resistenz verrechnet wurden). (Kommt eines der beiden Pokémon auf die Bank, endet diese Wirkung.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
				fr: "Mini-Métronome",
				de: "Mini-Metronom"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togepi's type is still .) Togepi performs that attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 des attaques du Pokémon Défenseur. Mini-Métronome copie cette attaque en tous points, excepté son coût en Énergie. (Vous devez cependant faire tout ce qui est autrement requis pour utiliser cette attaque). (Quel que soit le type du Pokémon Défenseur, Togepi reste .) Togepi effectue cette attaque.",
				de: "Wirf eine Münze.Wähle bei „Kopf“ einen der Angriffe des verteidigenden Pokémon. Mini-Metronom kopiert diesen Angriff außer seinen Energiekosten. (Du musst allerdings alles andere tun, um diesen Angriff zu verwenden.) (Unabhängig vom Typ des verteidigenden Pokémon ist Togepis Typ weiterhin {C}.) Togepi führt diesen Angriff aus."
			},

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Still only a hatchling, it uses poison to chase off its enemies when threatened.",
		fr: "Même si ce n'est qu'un poussin, il utilise un poison pour repousser ses ennemis quand il se sent menacé.",
		de: "Obwohl es gerade erst geschlüpft ist, kann es schon mit seinem Gift seine Feinde vertreiben."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89928
			},
		}
	]
}

export default card
