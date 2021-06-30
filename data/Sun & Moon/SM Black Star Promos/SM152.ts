import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
		es: "Tapu Lele",
		it: "Tapu Lele",
		pt: "Tapu Lele",
		de: "Kapu-Fala"
	},
	illustrator: "Mizue",
	rarity: "Rare",
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
				en: "Charmed Charm",
				fr: "Amulette Enchantée",
				es: "Amuleto Encantado",
				it: "Amuleto Incantato",
				pt: "Pingente Encantado",
				de: "Zauberschmuck"
			},
			effect: {
				en: "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent’s Active Pokémon Confused.",
				fr: "Chaque fois que vous attachez une carte Outil Pokémon avec « Amulette Féerique » dans son nom de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
				es: "Cada vez que unas 1 carta de Herramienta Pokémon que tenga \"Amuleto Hada\" en su nombre de tu mano a este Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido.",
				it: "Ogni volta che assegni una carta Oggetto Pokémon con “Amuleto Folletto” nel nome dalla tua mano a questo Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
				pt: "Sempre que ligar uma carta de Ferramenta Pokémon que tenha “Pingente de Fada” em seu nome da sua mão a este Pokémon durante a sua vez de jogar, você poderá deixar o Pokémon Ativo do seu oponente Confuso.",
				de: "Jedes Mal, wenn du während deines Zuges eine Pokémon-Ausrüstung, bei dem Feenschmuck zum Namen gehört, aus deiner Hand an dieses Pokémon anlegst, kannst du das Aktive Pokémon deines Gegners verwirren."
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
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
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



}

export default card
