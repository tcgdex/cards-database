enum Tag {
	BASIC,
	BASICENERGY,
	BREAK,
	EX,
	GX,
	ITEM,
	LEGEND,
	LEVELUP,
	MEGA,
	RESTORED,
	ROCKETSECRETMACHINE,
	SP, // not in switch case
	SPECIAL,
	STADIUM,
	STAGE1,
	STAGE2,
	SUPPORTER,
	TAGTEAM,
	TECHNICALMACHINE,
	TOOL,
	V,
	VMAX,
}

const en = [
	"Basic Pokémon",
	"Basic Energy",
	"BREAK",
	"EX",
	"GX",
	"Item",
	"LEGEND",
	"Level-Up",
	"MEGA",
	"Restored",
	"Rocket's Secret Machine",
	"SP",
	"Special",
	"Stage 1",
	"Stage 2",
	"Supporter",
	"Tag Team",
	"Technical Machine",
	"Tool",
	"Pokémon V",
	"Pokémon VMAX"
]

const fr = [
	"Pokémon de base",
	"Energie de base",
	"TURBO",
	"EX",
	"GX",
	"Objet",
	"LÉGENDE",
	"Niveau Sup",
	"Méga",
	"Restauré",
	"Machine secrète dees Rocket",
	"SP",
	"Spéciale",
	"Niveau 1",
	"Niveau 2",
	"Supporter",
	"ESCOUADE",
	"Machine Technique",
	"Outil",
	"Pokémon V",
	"Pokémon VMAX"
]

namespace Tag {
	export function toLang(i: Tag, lang: string) {
		switch (lang) {
			case "en":
				return en[i]
			case "fr":
				return fr[i]
			default:
				break;
		}
	}

	export function lookup(str: string): Array<Tag> {
		const list: Array<Tag> = []
		switch (str) {
			// BASIC
			case "Basic Pokémon":
			case "Basic":
			case "Pokémon de base":
				list.push(Tag.BASIC)
				break

			case "Basic Energy":

			case "Énergie de base":
				list.push(Tag.BASICENERGY)
				break

			// BREAK
			case "BREAK":

			case "TURBO":
				list.push(Tag.BREAK)
				break
			// EX
			case "Pokémon-EX":
			case "EX":

			case "EX Pokémon":
				list.push(Tag.EX)
				break

			// GX
			case "Pokémon-GX":
			case "GX":
				list.push(Tag.GX)
				break

			// Item
			case "Trainer - Item":
			case "Item":

			case "Dresseur - Object":
				list.push(Tag.ITEM)
				break

			// LEGEND
			case "Pokémon LEGEND":
			case "LEGEND":

			case "Pokémon Légende":
				list.push(Tag.LEGEND)
				break

			// Level-Up
			case "Level-Up Pokémon":
			case "Level Up":

			case "Niveau Sup. Pokémon":
				list.push(Tag.LEVELUP)
				break

			// MEGA
			case "MEGA":

			case "Méga-":
				list.push(Tag.MEGA)
				break

			// Restored
			case "Restored Pokémon":
			case "Restored":
				list.push(Tag.RESTORED)
				break

			// Rocket's Secret Machine
			case "Trainer [Rocket's Secret Machine]":
			case "Rocket's Secret Machine":
				list.push(Tag.ROCKETSECRETMACHINE)
				break

			case "Special Energy":
			case "Special":

			case "Énergie spéciale":
				list.push(Tag.SPECIAL)
				break

			case "Trainer - Stadium":
			case "Trainer [Stadium]":
			case "Stadium":

			case "Dresseur - Stade":
				list.push(Tag.STADIUM)
				break

			// Stage 1
			case "Stage 1 Pokémon":
			case "Stage 1":

			case "Pokémon Niveau 1":
				list.push(Tag.STAGE1)
				break

			// Stage 2
			case "Stage 2 Pokémon":
			case "Stage 2":

			case "Pokémon Niveau 2":
				list.push(Tag.STAGE2)
				break

			// Supporter
			case "Trainer - Supporter":
			case "Trainer [Supporter]":
			case "Supporter":

			case "Dresseur - Supporter":
				list.push(Tag.SUPPORTER)
				break

			// TAG TEAM
			case "Pokémon-TAG TEAM":
			case "TAG TEAM":


			case "Pokémon-ESCOUADE":
				list.push(Tag.TAGTEAM)
				break

			case "Trainer [Technical Machine]":
			case "Technical Machine":

			case "Machine Technique":
				list.push(Tag.TECHNICALMACHINE)
				break

			case "Trainer [Pokémon Tool]":
			case "Pokémon Tool":
			case "Pok��mon Tool":

			case "Dresseur [Outil Pokémon]":
				list.push(Tag.TOOL)
				break

			case "Pokémon-V":
				list.push(Tag.V)
				break

			case "Pokémon-VMAX":
				list.push(Tag.VMAX)
			case "null":
				break

			default:
				throw new Error(`Tag is not corresponding to anything (${str})`);
		}
		return list
	}
}

export default Tag
