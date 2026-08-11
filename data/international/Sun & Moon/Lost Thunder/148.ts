import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Shiinotic",
		'fr-fr': "Lampignon",
		'es-es': "Shiinotic",
		'it-it': "Shiinotic",
		'pt-br': "Shiinotic",
		'de-de': "Lamellux"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		756,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Effect Spore",
				'fr-fr': "Pose Spore",
				'es-es': "Efecto Espora",
				'it-it': "Spargispora",
				'pt-br': "Esporo de Efeito",
				'de-de': "Sporenwirt"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Asleep.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Endormi.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Dormido.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, il Pokémon attaccante viene addormentato.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), o Pokémon Atacante será Adormecido.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), schläft das Angreifende Pokémon jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Dream’s Touch",
				'fr-fr': "Contact Onirique",
				'es-es': "Toque de Ensueño",
				'it-it': "Tocco Onirico",
				'pt-br': "Toque Onírico",
				'de-de': "Traumsequenz"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Asleep, your opponent shuffles all Energy from it into their deck.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, votre adversaire mélange toute l’Énergie qui lui est attachée avec son deck.",
				'es-es': "Si el Pokémon Activo de tu rival está Dormido, tu rival pone todas las Energías de ese Pokémon en su baraja y baraja todas las cartas.",
				'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, il tuo avversario rimischia tutte le Energie assegnategli nel suo mazzo.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, seu oponente embaralha todas as Energias ligadas a ele no próprio baralho.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, mischt dein Gegner alle Energien von jenem Pokémon in sein Deck."
			},
			damage: 50,

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

	retreat: 2,

	description: {
		'en-us': "It emits flickering spores that cause drowsiness. When its prey succumb to sleep, this Pokémon feeds on them by sucking in their energy.",
	},

	thirdParty: {
		cardmarket: 365785,
		tcgplayer: 178967
	}
}

export default card
