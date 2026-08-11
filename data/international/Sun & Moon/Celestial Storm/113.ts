import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Claw",
				'fr-fr': "Mâchoire",
				'es-es': "Garra",
				'it-it': "Artiglio",
				'pt-br': "Garra",
				'de-de': "Klaue"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slack Off",
				'fr-fr': "Paresse",
				'es-es': "Relajo",
				'it-it': "Pigro",
				'pt-br': "Relaxar",
				'de-de': "Tagedieb"
			},
			effect: {
				'en-us': "Heal all damage from this Pokémon. It can’t attack during your next turn.",
				'fr-fr': "Soignez tous les dégâts de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Cura todos los puntos de daño a este Pokémon. No puede atacar durante tu próximo turno.",
				'it-it': "Cura questo Pokémon da tutti i danni. Non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Cure todo o dano deste Pokémon. Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Heile allen Schaden bei diesem Pokémon. Es kann während deines nächsten Zuges nicht angreifen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it eats just three leaves in a day, it is satisfied. Other than that, it sleeps for 20 hours a day.",
	},

	thirdParty: {
		cardmarket: 361352,
		tcgplayer: 170942
	}
}

export default card
