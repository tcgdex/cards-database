import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		es: "Simisage",
		it: "Simisage",
		pt: "Simisage",
		de: "Vegichita"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		512,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
		es: "Pansage",
		it: "Pansage",
		pt: "Pansage",
		de: "Vegimak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Torment",
				fr: "Tourmente",
				es: "Tormento",
				it: "Attaccalite",
				pt: "Atormentar",
				de: "Folterknecht"
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Ce dernier ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Dicho Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Esse Pokémon não poderá usar esse ataque durante a próxima vez de jogar do seu oponente.",
				de: "Wähle 1 Angriff des Aktiven Pokémon deines Gegners. Das Pokémon kann den gewählten Angriff während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281348
	}
}

export default card
