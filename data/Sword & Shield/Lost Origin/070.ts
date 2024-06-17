import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 20
	}, {
		cost: ["Psychic"],

		name: {
			en: "Lost Mine",
			fr: "Mine Perdue",
			es: "Mina Perdida",
			it: "Miniera Perduta",
			pt: "Mina Perdida",
			de: "Nirgendwo-Mine"
		},

		effect: {
			en: "You can use this attack only if you have 10 or more cards in the Lost Zone. Put 12 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous avez 10 cartes ou plus dans la Zone Perdue. Placez 12 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Puedes usar este ataque solo si tienes 10 cartas o más en la Zona Perdida. Pon 12 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Puoi usare questo attacco solo se hai 10 o più carte nell'area perduta. Metti 12 segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Você só pode usar este ataque se tiver 10 ou mais cartas na Zona Perdida. Coloque 12 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Du kannst diese Attacke nur einsetzen, wenn du 10 oder mehr Karten im Nirgendwo hast. Lege 12 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card
