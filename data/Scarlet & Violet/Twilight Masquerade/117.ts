import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [545],
	set: Set,

	name: {
		en: "Scolipede",
		fr: "Brutapode",
		es: "Scolipede",
		it: "Scolipede",
		pt: "Scolipede",
		de: "Cerapendra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Dastardly Jab",
			fr: "Coup Ignoble",
			es: "Puya Vil",
			it: "Stoccata Ignobile",
			pt: "Punhalada Indecorosa",
			de: "Schurkischer Stich"
		},

		effect: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk",
			es: "Bomba Lodo",
			it: "Fangobomba",
			pt: "Bomba de Lodo",
			de: "Matschbombe"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shiburingaru"
}

export default card