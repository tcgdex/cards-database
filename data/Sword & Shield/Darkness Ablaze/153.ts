import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrape Off",
				fr: "Racler",
				es: "Raspadura",
				it: "Raschiare",
				pt: "Raspar o Tacho",
				de: "Wegkratzen"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
				pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smack and Run",
				fr: "Gifle et Fuite",
				es: "Abofetear y Correr",
				it: "Sberlafuga",
				pt: "Esbofetear e Correr",
				de: "Ohrfeigen und Abhauen"
			},
			effect: {
				en: "Put this Pokémon and all attached cards into your hand.",
				fr: "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
				es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
				it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
				de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss."
	},

	thirdParty: {
		cardmarket: 483644,
		tcgplayer: 219367
	}
}

export default card
