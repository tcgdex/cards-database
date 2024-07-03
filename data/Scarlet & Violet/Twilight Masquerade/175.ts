import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [489],
	set: Set,

	name: {
		en: "Phione",
		fr: "Phione",
		es: "Phione",
		it: "Phione",
		pt: "Phione",
		de: "Phione"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beckon",
			fr: "Invite",
			es: "Hacer Señas",
			it: "Appello",
			pt: "Aceno",
			de: "Herbeiwinken"
		},

		effect: {
			en: "Put a Supporter card from your discard pile into your hand.",
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
			it: "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Apoiador da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
			es: "Presión Energética",
			it: "Energipressa",
			pt: "Aperto de Energia",
			de: "Energiedruck"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card