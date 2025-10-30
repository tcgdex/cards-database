import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		de: "Pachirisu",
		it: "Pachirisu",
		es: "Pachirisu",
		pt: "Pachirisu",
		'es-mx': "Pachirisu"
	},

	illustrator: "tono",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [417],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electrified Incisors",
			fr: "Incisives Électrifiées",
			de: "Elektrisierte Nagerei",
			it: "Incisivi Elettrizzati",
			es: "Incisivos Electrificados",
			pt: "Incisivos Eletrificados",
			'es-mx': "Incisivos Electrizados"
		},

		effect: {
			en: "During your opponent's next turn, whenever they attach an Energy card from their hand to the Defending Pokémon, place 8 damage counters on that Pokémon.",
			fr: "Pendant son prochain tour, chaque fois que votre adversaire attache une carte Énergie de sa main au Pokémon Défenseur, placez 8 marqueurs de dégâts sur ce Pokémon-là.",
			de: "Lege während des nächsten Zuges deines Gegners jedes Mal, wenn er 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, 8 Schadensmarken auf jenes Pokémon.",
			it: "Ogni volta che il tuo avversario assegna al Pokémon difensore una carta Energia dalla propria mano durante il suo prossimo turno, metti otto segnalini danno su quel Pokémon.",
			es: "Durante el próximo turno de tu rival, cada vez que este una 1 carta de Energía de su mano al Pokémon Defensor, pon 8 contadores de daño en ese Pokémon.",
			pt: "Durante o próximo turno do seu oponente, sempre que ele ligar uma carta de Energia da mão dele ao Pokémon Defensor, coloque 8 contadores de dano naquele Pokémon.",
			'es-mx': "Durante el próximo turno de tu rival, cada vez que este una 1 carta de Energía de su mano al Pokémon Defensor, pon 8 contadores de daño en ese Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654390,
		cardmarket: 851122
	}
}

export default card