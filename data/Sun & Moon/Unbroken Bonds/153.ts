import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		pt: "Lickilicky",
		de: "Schlurplek"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eat Up",
				fr: "Dévorer",
				es: "Tragonear",
				it: "Piatto Pulito",
				pt: "Deglutir",
				de: "Aufessen"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon. If you discarded a Pokémon Tool card in this way, heal all damage from this Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, soignez tous les dégâts de ce Pokémon.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival. Si has descartado alguna carta de Herramienta Pokémon de esta manera, cura todos los puntos de daño a este Pokémon.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario. Se scarti una carta Oggetto Pokémon in questo modo, cura questo Pokémon da tutti i danni.",
				pt: "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma carta de Ferramenta Pokémon desta forma, cure todo o dano deste Pokémon.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, heile allen Schaden bei diesem Pokémon."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonguenado",
				fr: "Déferlante de Langues",
				es: "Tornado de Lametones",
				it: "Leccaciclone",
				pt: "Turbilíngua",
				de: "Schlecksturm"
			},
			effect: {
				en: "Flip 4 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 372441
	}
}

export default card
