import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
		'es-es': "Slurpuff",
		'it-it': "Slurpuff",
		'pt-br': "Slurpuff",
		'de-de': "Sabbaione"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tasting",
				'fr-fr': "Dégustation",
				'es-es': "Degustación",
				'it-it': "Assaggio",
				'pt-br': "Degustação",
				'de-de': "Kostprobe"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card. If this Pokémon is your Active Pokémon, draw 1 more card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Si ce Pokémon est votre Pokémon Actif, piochez une carte supplémentaire.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta. Si este Pokémon es tu Pokémon Activo, roba 1 carta más.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta. Se questo Pokémon è il tuo Pokémon attivo, pesca una carta in più.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode comprar um card. Se este Pokémon for seu Pokémon Ativo, compre mais 1 card.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte ziehen. Wenn dieses Pokémon dein Aktives Pokémon ist, ziehe 1 zusätzliche Karte."
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
				'en-us': "Light Pulse",
				'fr-fr': "Vibrumineuse",
				'es-es': "Pulso Luminoso",
				'it-it': "Impulso Minore",
				'pt-br': "Pulso de Luz",
				'de-de': "Sanfte Welle"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a este Pokémon durante a próxima vez do seu oponente.",
				'de-de': "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 60,

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
		'en-us': "It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
	},

	thirdParty: {
		cardmarket: 281875,
		tcgplayer: 94637
	}
}

export default card
