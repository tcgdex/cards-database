import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Slowbro",
         ja: "軽いスローブロ",
         fr: "Light Slowbro",
         de: "Leichtes Slowbro",
         es: "Luz lenta",
         it: "Light Slowbro",
         pt: "Light Slowbro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [80],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Fish Out",
            ja: "釣りをする",
            fr: "Pêcher",
            de: "Herausfischen",
            es: "Pescar",
            it: "Pescare",
            pt: "Pescar fora",
          },
          effect: {
            en: "Your opponent may choose up to 3 Baby Pokemon, Basic Pokemon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same.",
            ja: "相手は、廃棄された山から最大3匹のベビーポケモン、基本的なポケモン、および/または進化カードを選択し、デッキにシャッフルすることができます。いずれにせよ、あなたは同じことをするかもしれません。",
            fr: "Votre adversaire peut choisir jusqu'à 3 bébé Pokémon, Pokémon de base et / ou cartes d'évolution de sa pile de défausse et les mélanger dans son deck. Quoi qu'il en soit, vous pouvez faire de même.",
            de: "Ihr Gegner kann bis zu 3 Baby -Pokemon-, Basic -Pokemon- und/oder Evolutionskarten aus seinem Ablagerungshaufen auswählen und in sein Deck mischen. In jedem Fall können Sie dasselbe tun.",
            es: "Tu oponente puede elegir hasta 3 pokemon, pokemon básicos y/o cartas de evolución de su pila de descarte y arrastrarlas en su mazo. De cualquier manera, puede hacer lo mismo.",
            it: "Il tuo avversario può scegliere fino a 3 pokemon per bambini, pokemon di base e/o carte di evoluzione dal suo mucchio di scarto e mescolarle nel suo mazzo. Ad ogni modo, puoi fare lo stesso.",
            pt: "Seu oponente pode escolher até 3 cartões de Pokémon, Pokémon básicos e/ou evolução de sua pilha de descarte e embaralharem em seu deck. De qualquer maneira, você pode fazer o mesmo.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Splash About",
            ja: "スプラッシュについて",
            fr: "Barboter",
            de: "Spritzen Sie herum",
            es: "Salpicar",
            it: "Spruzzare",
            pt: "Cair",
          },
          effect: {
            en: "If there are more Energy attached to the Defending Pokemon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.",
            ja: "Slowbroを軽量するよりも防御ポケモンに加えられるエネルギーが多くある場合、この攻撃は20のダメージと20のダメージをさらに発生させます。そうでない場合、この攻撃は20ダメージを与えます。",
            fr: "S'il y a plus d'énergie attachée au Pokémon en défense que pour allumer Slowbro, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires. Sinon, cette attaque fait 20 dégâts.",
            de: "Wenn das verteidigende Pokémon mehr Energie befindet als an Light Slowbro, verursacht dieser Angriff 20 Schaden zuzüglich 20 mehr Schaden. Wenn nicht, verursacht dieser Angriff 20 Schaden.",
            es: "Si hay más energía unida al Pokémon defensor que a la luz lenta, este ataque hace 20 daños más 20 más de daño. Si no, este ataque hace 20 daños.",
            it: "Se c'è più energia attaccata al Pokemon in difesa che alla luce Slowbro, questo attacco fa 20 danni più 20 danni in più. In caso contrario, questo attacco fa 20 danni.",
            pt: "Se houver mais energia ligada ao pokemon atual do que a Light Slowbro, esse ataque causará 20 danos mais 20 mais danos. Caso contrário, esse ataque causa 20 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
