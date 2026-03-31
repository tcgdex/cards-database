import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Aurorus",
		fr: "Dragmara",
		es: "Aurorus",
		de: "Amagarga",
		it: "Aurorus",
		pt: "Aurorus"
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [
		699
	],
	hp: 170,
	types: [
		"Water"
	],
	stage: "Stage2",
	evolveFrom: {
		en: "Amaura",
		fr: "Amagara",
		es: "Amaura",
		de: "Amarino",
		it: "Amaura",
		pt: "Amaura"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tundra Wall",
				fr: "Mur Toundra",
				es: "Muro Tundra",
				de: "Tundra-Wall",
				it: "Murotundra",
				pt: "Parede de Tundra"
			},
			effect: {
				en: "All of your Pokémon that have any [W] Energy attached take 50 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Tundra Wall doesn't stack.",
				fr: "Vos Pokémon auxquels au moins une Énergie [W] est attachée subissent 50 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance). L'effet de Mur Toundra n'est pas cumulable.",
				es: "Los ataques de los Pokémon de tu rival hacen 50 puntos de daño menos a todos tus Pokémon que tengan alguna Energía [W] unida (después de aplicar Debilidad y Resistencia). El efecto de Muro Tundra no se acumula.",
				de: "Allen deinen Pokémon, an die mindestens 1 [W]-Energie angelegt ist, werden durch Attacken von Pokémon deines Gegners 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Der Effekt von Tundra-Wall stapelt sich nicht.",
				it: "I tuoi Pokémon che hanno delle Energie [W] assegnate subiscono 50 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza. L'effetto di Murotundra non è cumulabile.",
				pt: "Todos os seus Pokémon que têm alguma Energia [W] ligada a eles recebem 50 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência). O efeito de Parede de Tundra não acumula."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			name: {
				en: "Freezing Chill",
				fr: "Frisson Glaçant",
				es: "Frío Helador",
				de: "Gefrierschock",
				it: "Freddo Glaciale",
				pt: "Frio de Arrepiar"
			},
			damage: "150",
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
				de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques."
			}
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Masa",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684357,
		cardmarket: 877509
	}
}

export default card
