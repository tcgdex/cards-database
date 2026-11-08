import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plasma Steel",
				'fr-fr': "Acier Plasma",
				'es-es': "Acero Plasma",
				'it-it': "Acciaio Plasma",
				'pt-br': "Aço de Plasma",
				'de-de': "Plasmastahl"
			},
			effect: {
				'en-us': "Prevent all damage done to your Metal Pokémon by attacks from your opponent’s Pokémon-EX.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon Metal par des attaques des Pokémon-EX de votre adversaire.",
				'es-es': "Evita todo el daño infligido a tus Pokémon Metal por ataques de los Pokémon-EX de tu rival.",
				'it-it': "Previeni tutti i danni da attacchi inflitti ai tuoi Pokémon Metal dai Pokémon-EX del tuo avversario.",
				'pt-br': "Previne todos os danos causados a seus Pokémon Metal causados pelos ataques dos Pokémon-EX do seu oponente.",
				'de-de': "Verhindere allen Schaden, der deinen Metal-Pokémon durch Angriffe von Pokémon-EX deines Gegners zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Bullet",
				'fr-fr': "Projectile Lourd",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The minigear spins at high speed. Then the energy from the red core charges the minigear to make it ready to fire.",
	},

	thirdParty: {
		cardmarket: 280830,
		tcgplayer: 86488
	}
}

export default card
