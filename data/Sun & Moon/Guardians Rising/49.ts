import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
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
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Facade",
				fr: "Façade",
				es: "Imagen",
				it: "Facciata",
				pt: "Fachada",
				de: "Fassade"
			},
			effect: {
				en: "If this Pokémon is Burned or Poisoned, this attack does 80 more damage.",
				fr: "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon está Envenenado o Quemado, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon è bruciato o avvelenato, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon estiver Envenenado ou Queimado, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dieses Pokémon verbrannt oder vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297511,
		tcgplayer: 130955
	}
}

export default card
