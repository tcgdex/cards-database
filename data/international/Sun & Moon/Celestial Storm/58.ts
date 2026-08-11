import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Swalot",
		'fr-fr': "Avaltout",
		'es-es': "Swalot",
		'it-it': "Swalot",
		'pt-br': "Swalot",
		'de-de': "Schlukwech"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'es-es': "Amnesia",
				'it-it': "Amnesia",
				'pt-br': "Amnésia",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				'fr-fr': "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swallow Up",
				'fr-fr': "Engloutir",
				'es-es': "Engullir",
				'it-it': "Inghiottire",
				'pt-br': "Engolir por Inteiro",
				'de-de': "Runterschlucken"
			},
			effect: {
				'en-us': "If, before doing damage, your opponent’s Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage.",
				'fr-fr': "Si, avant d’infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan menos PS que a este Pokémon, este ataque hace 80 puntos de daño más.",
				'it-it': "Se, prima di infliggere danni, il Pokémon attivo del tuo avversario ha meno PS rimanenti di questo Pokémon, questo attacco infligge 80 danni in più.",
				'pt-br': "Se antes de causar dano o Pokémon Ativo do seu oponente tiver menos PS restante do que este Pokémon, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners weniger verbleibende KP als dieses Pokémon hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It gulps anything that fits in its mouth. Its special enzymes can dissolve anything.",
	},

	thirdParty: {
		cardmarket: 361303,
		tcgplayer: 170879
	}
}

export default card
