import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		'fr-fr': "Carapuce",
		'en-us': "Squirtle",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Repli",
			'en-us': "Withdraw",
			'es-es': "Refugio",
			'it-it': "Ritirata",
			'pt-br': "Retirada",
			'de-de': "Panzerschutz"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Coud'Krâne",
			'en-us': "Skull Bash",
			'es-es': "Cabezazo",
			'it-it': "Capocciata",
			'pt-br': "Quebra-crânio",
			'de-de': "Schädelwumme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733602,
				tcgplayer: 502548,
				cardtrader: 261151
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733602,
				tcgplayer: 502548,
				cardtrader: 261151
			}
		},
		{
			type: 'normal',
			stamp: ['pokemon-center'],
			thirdParty: {
				cardmarket: 721198
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794910
			}
		},
	],

	illustrator: "kantaro",

	
}

export default card
