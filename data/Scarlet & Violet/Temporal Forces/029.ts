import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lava Zone",
			fr: "Zone de Lave",
			es: "Zona de Lava",
			it: "Area Lavica",
			pt: "Zona de Lava"
		},

		effect: {
			en: "Whenever your opponent's Active Pokémon moves to the Bench during their turn, their new Active Pokémon is now Burned.",
			fr: "À chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, son nouveau Pokémon Actif est maintenant Brûlé.",
			es: "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, su nuevo Pokémon Activo pasa a estar Quemado.",
			it: "Ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, il suo nuovo Pokémon attivo viene bruciato.",
			pt: "Sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, o novo Pokémon Ativo dele agora estará Queimado."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor"
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card