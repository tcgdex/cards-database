import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon",
		de: "Lumineon"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Finneon",
		fr: "Ecayon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fin Luster",
				fr: "Lustre-aileron",
				de: "Schimmerflosse"
			},
			effect: {
				en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Luminéon est votre Pokémon Actif, vous pouvez regarder la main de votre adversaire. Si le Banc de votre adversaire n'est pas plein, choisissez 1 Pokémon de base dans la main de votre adversaire et placez-le sur son Banc. Ensuite, échangez-le avec le Pokémon  Défenseur. Ce pouvoir ne peut pas être utilisé si Luminéon est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir, wenn Lumineon dein Aktives Pokémon ist, die Handkarten deines Gegners anschauen. Wenn die Bank deines Gegners nicht voll besetzt ist, wähle 1 Basis-Pokémon-Karte von der Hand deines Gegners und lege sie auf seine Bank. Danach tausche das Verteidigende Pokémon gegen das gewählte Pokémon aus. Diese Poké-Power kann nicht benutzt werden, wenn Lumineon von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Quick Swim",
				fr: "Nage rapide",
				de: "Flottes Schwimmen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Elegant Swim",
				fr: "Nage élégante",
				de: "Elegantes Schwimmen"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Lumineon during your opponent's next turn.",
				fr: "Lancez  une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Luminéon lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Lumineon zugefügt würden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278302
	}
}

export default card
