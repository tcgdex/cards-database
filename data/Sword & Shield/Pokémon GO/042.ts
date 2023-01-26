import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d'Alola",
		es: "Raticate de Alola",
		it: "Raticate di Alola",
		pt: "Raticate de Alola",
		de: "Alola-Rattikarl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d'Alola",
		es: "Rattata de Alola",
		it: "Rattata di Alola",
		pt: "Rattata de Alola",
		de: "Alola-Rattfratz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Chase Up",
			fr: "Relancer",
			es: "Perseguir",
			it: "Rincorrere",
			pt: "Perseguir",
			de: "Dampf machen"
		},

		effect: {
			en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Super Fang",
			fr: "Croc Fatal",
			es: "Superdiente",
			it: "Superzanna",
			pt: "Superpresa",
			de: "Superzahn"
		},

		effect: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind."
		}
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card