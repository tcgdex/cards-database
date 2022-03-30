import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		es: "Nidoqueen",
		it: "Nidoqueen",
		pt: "Nidoqueen",
		de: "Nidoqueen"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Offensive Ω",
				en: "Ω Barrage",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
				en: "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)",
				es: "{title}: Este Pokémon puede atacar 2 veces por turno. (Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo).",
				it: "{title}: Questo Pokémon può attaccare due volte durante lo stesso turno. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario avrà scelto il suo nuovo Pokémon attivo.",
				pt: "{title}: Este Pokémon pode atacar duas vezes por turno. (Se o primeiro ataque Nocautear o Pokémon Ativo de seu oponente, você deve atacar de novo assim que seu oponente escolher um novo Pokémon Ativo).",
				de: "{title}: Dieses Pokémon kann während eines Zuges zweimal angreifen. (Falls der erste Angriff das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon ausgewählt hat.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dynamite Punch",
				fr: "Poing Dynamite",
				es: "Puño Dinamita",
				it: "Pugno Dinamite",
				pt: "Soco Dinamite",
				de: "Dynamitstoß"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself. Don't apply Weakness to this damage.",
				fr: "Ce Pokémon s'inflige 20 dégâts. Ne pas appliquer la Faiblesse à ces dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo. No apliques Debilidad a este daño.",
				it: "Questo Pokémon infligge 20 danni a se stesso. Non applicare la debolezza a questi danni.",
				pt: "Esse Pokémon causa 20 de danos a ele mesmo. Não aplique Fraqueza a esse dano.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu. Wende Schwäche nicht an."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
