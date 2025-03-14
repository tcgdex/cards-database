import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Breeder",
		pt: "Pokémon Breeder",
		fr: "Éleveur de Pokémon",
		de: "Pokémon-Züchter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.",
		pt: "Coloque um card de Evolução Estágio 2 da sua mão no Pokémon Básico correspondente. Você só pode jogar este card quando você teria permissão para evoluir aquele Pokémon de qualquer forma.",
		fr: "Placez une carte Évolution de Niveau 2 de votre main sur le Pokémon de base correspondant. Vous ne pouvez jouer cette carte que quand il vous serait possible de faire évoluer ce Pokémon de toute façon.",
		de: "Lege eine Evolutionskarte der Phase 2 aus Deiner Hand auf das entsprechende Basis-Pokémon. Du kannst diese Karte jedoch nur spielen, wenn Du dieses Pokémon ohnehin weiterentwickeln darfst."
	}
}

export default card
