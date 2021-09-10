import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 140,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss and Turn",
				fr: "Retournement",
				es: "Dar Vueltas Dormido",
				it: "Girarsi e Rigirarsi",
				pt: "Dar Voltas Dormindo",
				de: "Herumwälzen"
			},
			effect: {
				en: "This attack can be used even if this Pokémon is Asleep. If it is, this attack does 90 more damage.",
				fr: "Cette attaque peut être utilisée même si ce Pokémon est Endormi. S’il l’est, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Este ataque se puede usar incluso si este Pokémon está Dormido. Si lo está, este ataque hace 90 puntos de daño más.",
				it: "Questo attacco può essere usato anche se questo Pokémon è addormentato. Se lo è, questo attacco infligge 90 danni in più.",
				pt: "Este ataque pode ser usado mesmo que este Pokémon esteja Adormecido. Se estiver Adormecido, este ataque causará 90 de danos adicionais.",
				de: "Dieser Angriff kann auch eingesetzt werden, wenn dieses Pokémon schläft. Wenn es schläft, fügt dieser Angriff 90 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow",
				fr: "Avale",
				es: "Tragar",
				it: "Introenergia",
				pt: "Engolir",
				de: "Verzehrer"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
