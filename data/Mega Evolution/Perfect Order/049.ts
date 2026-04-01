import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		'es-mx': "Haunter",
		de: "Alpollo",
		it: "Haunter",
		pt: "Haunter"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Haunt",
			fr: "Hanter",
			es: "Espanto",
			'es-mx': "Maleficio",
			de: "Spuk",
			it: "Infestare",
			pt: "Assombrar"
		},

		effect: {
			en: "Place 3 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
			de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners.",
			it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684430,
		cardmarket: 877464
	}
}

export default card