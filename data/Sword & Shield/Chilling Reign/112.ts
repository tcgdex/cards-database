import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Metagross V",
		fr: "Métalosse V",
		es: "Metagross V",
		it: "Metagross V",
		pt: "Metagross V",
		de: "Metagross V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Bullet Punch",
			fr: "Pisto-Poing",
			es: "Puño Bala",
			it: "Pugnoscarica",
			pt: "Soco Projétil",
			de: "Patronenhieb"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			en: "Synchro Hammer",
			fr: "Marteau Synchro",
			es: "Sincromartillo",
			it: "Sincromartello",
			pt: "Martelada Sincronizada",
			de: "Synchronhammer"
		},

		effect: {
			en: "If this Pokémon and your opponent’s Active Pokémon have the same amount of Energy attached, this attack does 90 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d’Énergies attachées, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas a ellos, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card