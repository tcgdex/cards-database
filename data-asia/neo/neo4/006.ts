import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Venomoth",
         ja: "軽い毒",
         fr: "Venomoth léger",
         de: "Leichte Giftung",
         es: "Veneno ligero",
         it: "Venomoth leggero",
         pt: "Venomoth leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [49],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Mysterious Wing",
            ja: "神秘的な翼",
            fr: "Aile mystérieuse",
            de: "Mysteriöser Flügel",
            es: "Ala misteriosa",
            it: "Ala misteriosa",
            pt: "Asa misteriosa",
          },
          effect: {
            en: "Your opponent may choose a Baby Pokemon, Basic Pokemon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
            ja: "対戦相手は、廃棄された山からベビーポケモン、基本的なポケモン、または進化カードを選択して、手に入れてください。いずれにせよ、あなたは同じことをするかもしれません。",
            fr: "Votre adversaire peut choisir un bébé pokemon, un pokemon de base ou une carte d'évolution de sa pile de défausse et la mettre dans sa main. Quoi qu'il en soit, vous pouvez faire de même.",
            de: "Ihr Gegner kann ein Baby -Pokemon, ein einfaches Pokémon oder ein Evolutionskarte von seinem Abwurfstapel auswählen und es in seine Hand stecken. In jedem Fall können Sie dasselbe tun.",
            es: "Tu oponente puede elegir un bebé Pokémon, Pokémon básico o una tarjeta de evolución de su pila de descarte y ponerla en su mano. De cualquier manera, puede hacer lo mismo.",
            it: "Il tuo avversario può scegliere un pokemon, un pokemon di base o una carta di evoluzione dal suo mucchio di scarti e metterlo nella sua mano. Ad ogni modo, puoi fare lo stesso.",
            pt: "Seu oponente pode escolher um bebê Pokémon, Pokémon básico ou cartão de evolução de sua pilha de descarte e colocá -la em sua mão. De qualquer maneira, você pode fazer o mesmo.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Synchronize",
            ja: "同期します",
            fr: "Synchroniser",
            de: "Synchronisieren",
            es: "Sincronizar",
            it: "Sincronizzare",
            pt: "Sincronizar",
          },
          effect: {
            en: "If Light Venomoth and the Defending Pokemon have a different number of Energy cards attached to them, this attack does nothing.",
            ja: "軽いボノモトと防御ポケモンに異なる数のエネルギーカードが付いている場合、この攻撃は何もしません。",
            fr: "Si Venomoth léger et le Pokémon en défense ont un nombre différent de cartes d'énergie qui leur sont attachées, cette attaque ne fait rien.",
            de: "Wenn leichte Venomoth und das verteidigende Pokémon eine andere Anzahl von Energiekarten mit sich bringen, tut dieser Angriff nichts.",
            es: "Si el veneno ligero y el Pokémon defensor tienen un número diferente de cartas de energía unidas a ellas, este ataque no hace nada.",
            it: "Se la luce Venomoth e il Pokemon in carica hanno un numero diverso di carte di energia collegate a loro, questo attacco non fa nulla.",
            pt: "Se o Light Venomoth e o Pokémon atual têm um número diferente de cartões de energia ligados a eles, esse ataque não fará nada.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
