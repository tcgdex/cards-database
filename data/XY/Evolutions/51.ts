import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Barrier",
				fr: "Bouclier",
				es: "Barrera",
				it: "Barriera",
				pt: "Barreira",
				de: "Barriere"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon. If 1 of your Pokémon used Barrier during your last turn, this attack can't be used.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon. Si l'un de vos Pokémon a utilisé Bouclier lors de votre dernier tour, cette attaque ne peut pas être utilisée.",
				es: "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon. Si 1 de tus Pokémon usó Barrera durante tu último turno, este ataque no se puede usar.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon. Se uno dei tuoi Pokémon ha usato Barriera durante il tuo ultimo turno, questo attacco non può essere usato.",
				pt: "Durante a próxima vez de jogar do seu oponente, previna todos os efeitos dos ataques a este Pokémon, inclusive danos. Se 1 dos seus Pokémon usou Barreira durante sua última vez de jogar, este ataque não poderá ser usado.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners zugefügt werden. Falls 1 deiner Pokémon Barriere während deines letzten Zuges eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
			},

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
		cardmarket: 293405,
		tcgplayer: 124064
	}
}

export default card
