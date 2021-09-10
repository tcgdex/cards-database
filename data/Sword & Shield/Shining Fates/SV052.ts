import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Théffroi",
		en: "Sinistea",
		es: "Sinistea",
		it: "Sinistea",
		pt: "Sinistea",
		de: "Fatalitee"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Chute Furtive",
			en: "Furtive Drop",
			es: "Caída Furtiva",
			it: "Lascito Furtivo",
			pt: "Gota Furtiva",
			de: "Hinterhältiger Fall"
		},

		effect: {
			fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			en: "Put 2 damage counters on your opponent’s Active Pokémon.",
			es: "Pon 2 contadores de daño en el Pokémon Activo de tu rival.",
			it: "Metti due segnalini danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente.",
			de: "Lege 2 Schadensmarken auf das Aktive Pokémon deines Gegners."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "This Pokémon is said to have been born when a lonely spirit possessed a cold, leftover cup of tea."
	}
}

export default card