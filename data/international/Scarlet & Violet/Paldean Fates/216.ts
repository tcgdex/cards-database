import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		'en-us': "Mew ex",
		'fr-fr': "Mew-ex",
		'es-es': "Mew ex",
		'it-it': "Mew-ex",
		'pt-br': "Mew ex",
		'de-de': "Mew-ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Restart",
			'fr-fr': "Nouveau Départ",
			'es-es': "Reinicio",
			'it-it': "Riavvio",
			'pt-br': "Recomeçar",
			'de-de': "Neuanfang"
		},

		effect: {
			'en-us': "Once during your turn, you may draw cards until you have 3 cards in your hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 3 en main.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas 3 cartas en tu mano.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere tre carte in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter 3 cartas na sua mão.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Genome Hacking",
			'fr-fr': "Piratage de Génome",
			'es-es': "Hackeo Genoma",
			'it-it': "Hacking del Genoma",
			'pt-br': "Hackear Genoma",
			'de-de': "Genom-Hacking"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751763,
				tcgplayer: 535527,
				cardtrader: 274402
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
