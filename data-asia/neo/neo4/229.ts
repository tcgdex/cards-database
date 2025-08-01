import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Houndoom",
         ja: "暗い猟犬",
         fr: "Chouchou",
         de: "Dark Houndoom",
         es: "HUEMO DARK",
         it: "Houndom scuro",
         pt: "Houndoom escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Eerie Howl",
            ja: "不気味なハウル",
            fr: "Hurlement étrange",
            de: "Unheimlich Howl",
            es: "Aullido misterioso",
            it: "Howl inquietante",
            pt: "Eerie Howl",
          },
          effect: {
            en: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokemon or Basic Pokemon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokemon.",
            ja: "対戦相手のベンチがいっぱいでない場合は、手を見てください。相手がベビーポケモンまたは基本的なポケモンを持っている場合は、そのうち1つを選択して、ベンチに置きます。次に、防御ポケモンで切り替えます。",
            fr: "Si le banc de votre adversaire n'est pas plein, regardez sa main. Si votre adversaire a un bébé pokemon ou un pokemon de base là-bas, choisissez 1 d'entre eux et mettez-le sur son banc. Ensuite, changez-le avec le Pokémon en défense.",
            de: "Wenn die Bank Ihres Gegners nicht voll ist, schauen Sie sich seine Hand an. Wenn Ihr Gegner dort ein Baby -Pokemon oder ein grundlegendes Pokémon hat, wählen Sie 1 davon und legen Sie es auf seine oder ihre Bank. Schalten Sie es dann mit dem verteidigenden Pokemon.",
            es: "Si el banco de tu oponente no está lleno, mira su mano. Si tu oponente tiene un Pokémon o Pokémon básico allí, elige 1 de ellos y póngalo en su banco. Luego, cambie con el Pokémon defensor.",
            it: "Se la panchina del tuo avversario non è piena, guarda la sua mano. Se il tuo avversario ha un pokemon per bambini o Pokemon di base lì, scegli 1 di loro e mettilo sulla sua panchina. Quindi, cambialo con il Pokemon in difesa.",
            pt: "Se o banco do seu oponente não estiver cheio, olhe para a mão dele ou dela. Se o seu oponente tiver algum Pokémon ou Pokémon básico lá, escolha 1 deles e coloque -o em seu banco. Em seguida, mude com o Pokémon defensor.",
          },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Dark Fire",
            ja: "暗い火",
            fr: "Feu noir",
            de: "Dunkles Feuer",
            es: "Fuego oscuro",
            it: "Fuoco scuro",
            pt: "Fogo escuro",
          },
          effect: {
            en: "If there are any Darkness Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more for the Darkness Energy you discarded). If there aren't any, this attack does 30 damage.",
            ja: "Dark Houndoomに闇のエネルギーカードが付いている場合、それらの1つを捨ててください。この攻撃は30ダメージに加えて20のダメージを与えます（捨てた暗闇のエネルギーに対してさらに10回以上）。いない場合、この攻撃は30のダメージを与えます。",
            fr: "S'il y a des cartes d'énergie d'obscurité attachées à Dark Houndoom, jetez 1 d'entre elles et cette attaque fait 30 dégâts plus 20 dégâts supplémentaires (plus 10 de plus pour l'énergie de l'obscurité que vous avez jetée). S'il n'y en a pas, cette attaque fait 30 dégâts.",
            de: "Wenn es an Darkness Energy -Karten an Dark Houndoom befestigt ist, verwerfen Sie 1 von ihnen und dieser Angriff schädigt 30 Schaden zu 20 weitere Schäden (plus 10 weitere für die von Ihnen verworfene Darkness -Energie). Wenn es keinen gibt, verursacht dieser Angriff 30 Schaden.",
            es: "Si hay alguna tarjeta de energía de oscuridad unidas a Dark Hohous, deseche 1 de ellas y este ataque hace 30 daños más 20 más de daño (más 10 más para la energía de la oscuridad que descartó). Si no hay ninguno, este ataque hace 30 daños.",
            it: "Se ci sono carte di energia oscura attaccate al segugio scuro, scartarle 1 e questo attacco fa 30 danni più 20 danni (più 10 altri per l'energia oscura che hai scartato). Se non ce ne sono, questo attacco fa 30 danni.",
            pt: "Se houver algum cartão de energia da escuridão ligado ao Houndoom Dark, descarte 1 deles e esse ataque causará 30 danos mais 20 danos (mais 10 mais para a energia da escuridão que você descartou). Se não houver, esse ataque causa 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
