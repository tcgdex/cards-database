import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				es: "Amnesia",
				it: "Amnesia",
				pt: "Amnésia",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swim",
				fr: "Nager",
				es: "Natación",
				it: "Nuotare",
				pt: "Natação",
				de: "Schwimmen"
			},
			effect: {
				en: "If any of your opponent’s Pokémon have any Water Energy attached to them, you may do 90 damage to 1 of your opponent’s Benched Pokémon instead of their Active Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si de l’Énergie Water est attachée à l’un des Pokémon de votre adversaire, vous pouvez infliger 90 dégâts à l’un des Pokémon de Banc de votre adversaire plutôt qu’à son Pokémon Actif. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Si alguno de los Pokémon de tu rival tiene alguna Energía Water unida a él, puedes hacer 90 puntos de daño a 1 de los Pokémon en Banca de tu rival en vez de a su Pokémon Activo. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Se uno qualsiasi dei Pokémon del tuo avversario ha delle Energie Water assegnate, puoi infliggere 90 danni a uno dei Pokémon nella panchina del tuo avversario invece che al suo Pokémon attivo. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Se algum dos Pokémon do seu oponente tiver alguma Energia Water ligada a ele, você poderá causar 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente ao invés de causar dano ao Pokémon Ativo dele(a) (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Wenn an die Pokémon deines Gegners mindestens 1 Water-Energie angelegt ist, kannst du 1 Pokémon auf der Bank deines Gegners anstelle seines Aktiven Pokémon 90 Schadenspunkte zufügen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
