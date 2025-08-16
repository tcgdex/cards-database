import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggcute",
         ja: "exeggcute",
         fr: "Exagegcute",
         de: "Exeggcute",
         es: "Exegg",
         it: "Exeggcute",
         pt: "Exeggcute",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [102],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hypnosis",
            ja: "催眠",
            fr: "Hypnose",
            de: "Hypnose",
            es: "Hipnosis",
            it: "Ipnosi",
            pt: "Hipnose",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },

        },
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
            en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.",
            ja: "この攻撃からのすべての損傷が防止されない限り、ExeggCuteから1つのダメージカウンターを削除できます。",
            fr: "À moins que tous les dégâts de cette attaque ne soient empêchés, vous pouvez supprimer 1 compteur de dégâts d'Exeggcute.",
            de: "Sofern nicht alle Schäden durch diesen Angriff verhindert werden, können Sie 1 Schadenschalter aus Exeggcute entfernen.",
            es: "A menos que se evite todo el daño de este ataque, puede eliminar 1 contador de daño del exeggcute.",
            it: "A meno che non vengano prevenuti tutti i danni da questo attacco, è possibile rimuovere 1 contatore di danni da ExeggCute.",
            pt: "A menos que todos os danos desse ataque sejam evitados, você pode remover 1 contador de danos do exeggcute.",
          },
          damage: 20,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
