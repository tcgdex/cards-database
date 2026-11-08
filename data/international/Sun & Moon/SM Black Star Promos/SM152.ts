import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tapu Lele",
		'fr-fr': "Tokopiyon",
		'es-es': "Tapu Lele",
		'it-it': "Tapu Lele",
		'pt-br': "Tapu Lele",
		'de-de': "Kapu-Fala"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		786,
	],
	hp: 110,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Charmed Charm",
				'fr-fr': "Amulette Enchantée",
				'es-es': "Amuleto Encantado",
				'it-it': "Amuleto Incantato",
				'pt-br': "Pingente Encantado",
				'de-de': "Zauberschmuck"
			},
			effect: {
				'en-us': "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent’s Active Pokémon Confused.",
				'fr-fr': "Chaque fois que vous attachez une carte Outil Pokémon avec « Amulette Féerique » dans son nom de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
				'es-es': "Cada vez que unas 1 carta de Herramienta Pokémon que tenga \"Amuleto Hada\" en su nombre de tu mano a este Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido.",
				'it-it': "Ogni volta che assegni una carta Oggetto Pokémon con “Amuleto Folletto” nel nome dalla tua mano a questo Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
				'pt-br': "Sempre que ligar uma carta de Ferramenta Pokémon que tenha “Pingente de Fada” em seu nome da sua mão a este Pokémon durante a sua vez de jogar, você poderá deixar o Pokémon Ativo do seu oponente Confuso.",
				'de-de': "Jedes Mal, wenn du während deines Zuges eine Pokémon-Ausrüstung, bei dem Feenschmuck zum Namen gehört, aus deiner Hand an dieses Pokémon anlegst, kannst du das Aktive Pokémon deines Gegners verwirren."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "As it flutters about, it scatters its strangely glowing scales. Touching them is said to restore good health on the spot.",
	},
}

export default card
