import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
		es: "Swalot",
		it: "Swalot",
		pt: "Swalot",
		de: "Schlukwech"
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
		en: "Gulpin",
		fr: "Gloupti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				es: "Amnesia",
				it: "Amnesia",
				pt: "Amnésia",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
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
				en: "Swallow Up",
				fr: "Engloutir",
				es: "Engullir",
				it: "Inghiottire",
				pt: "Engolir por Inteiro",
				de: "Runterschlucken"
			},
			effect: {
				en: "If, before doing damage, your opponent’s Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage.",
				fr: "Si, avant d’infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan menos PS que a este Pokémon, este ataque hace 80 puntos de daño más.",
				it: "Se, prima di infliggere danni, il Pokémon attivo del tuo avversario ha meno PS rimanenti di questo Pokémon, questo attacco infligge 80 danni in più.",
				pt: "Se antes de causar dano o Pokémon Ativo do seu oponente tiver menos PS restante do que este Pokémon, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners weniger verbleibende KP als dieses Pokémon hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 361303,
		tcgplayer: 170879
	}
}

export default card
