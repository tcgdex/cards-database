import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Ivysaur",
         ja: "アイビサウルス",
         fr: "Ivysaure",
         de: "IVYSaur",
         es: "Ivysaur",
         it: "Ivysaur",
         pt: "Ivysaur",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [2],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Leech Seed",
            ja: "リーチシード",
            fr: "Graine de sangsue",
            de: "Blutegelsamen",
            es: "Semilla sanguijuela",
            it: "Seme di sanguisuga",
            pt: "Semente de sanguessuga",
          },
          effect: {
            en: "Unless all damage from this attack is prevented, you may remove one damage counter from Ivysaur.",
            ja: "この攻撃からのすべての損傷が防止されない限り、イビサウルスから1つのダメージカウンターを削除することができます。",
            fr: "À moins que tous les dégâts de cette attaque ne soient empêchés, vous pouvez retirer un compteur de dégâts d'Ivysaur.",
            de: "Sofern nicht alle Schäden durch diesen Angriff verhindert werden, können Sie einen Schadenschalter aus IVYSaur entfernen.",
            es: "A menos que se evite todo el daño de este ataque, puede eliminar un contador de daños de Ivysaur.",
            it: "A meno che non vengano prevenuti tutti i danni da questo attacco, è possibile rimuovere un contatore di danni da Ivysaur.",
            pt: "A menos que todos os danos desse ataque sejam evitados, você pode remover um contador de danos de Ivysaur.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Vine Whip",
            ja: "つる鞭",
            fr: "Fouet de vigne",
            de: "Rebepeitsche",
            es: "Vine látigo",
            it: "Whip di vite",
            pt: "Vine Whip",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
