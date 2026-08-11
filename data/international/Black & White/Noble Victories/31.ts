import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade",
		'es-es': "Jellicent",
		'it-it': "Jellicent",
		'pt-br': "Jellicent",
		'de-de': "Apoquallyp"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cursed Body",
				'fr-fr': "Corps Maudit",
				'es-es': "Cuerpo Maldito",
				'it-it': "Corpofunesto",
				'pt-br': "Corpo Amaldiçoado",
				'de-de': "Tastfluch"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Confundido.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene confuso.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante ficará Confuso.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (oder dieses Pokémon sogar kampfunfähig wird), ist das Angreifende Pokémon jetzt verwirrt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
			},
			effect: {
				'en-us': "Does 20 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The fate of ships and crew that wander into Jellicent's habitats: all sunken, all lost, all vanished.",
	},

	thirdParty: {
		cardmarket: 280154,
		tcgplayer: 86305
	}
}

export default card
