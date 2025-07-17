import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Ninetales",
         ja: "軽いニネタール",
         fr: "Ninetales léger",
         de: "Leichte Ninetales",
         es: "Ninetales ligeros",
         it: "Ninetali leggeri",
         pt: "Ninetales leves",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [38],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Guiding Flame",
            ja: "ガイドフレーム",
            fr: "Guider la flamme",
            de: "Flamme führen",
            es: "Llama guía",
            it: "Fiamma guida",
            pt: "Chama orientadora",
          },
          effect: {
            en: "Put a Baby Pokemon or a Basic Pokemon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
            ja: "ベビーポケモンまたは基本的なポケモンカードを、捨てられた山からベンチに置きます。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Mettez un bébé Pokémon ou une carte Pokémon de base de votre tas de défausse sur votre banc. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Legen Sie ein Baby -Pokemon oder eine einfache Pokemon -Karte aus Ihrem Ablagerungsstapel auf Ihre Bank. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Pon un Pokémon Baby o una tarjeta de Pokémon básica de tu pila de descarte en tu banco. (No puedes usar este ataque si tu banco está lleno).",
            it: "Metti un pokemon per bambini o una carta Pokemon di base dalla tua pila di scarto sulla panchina. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Coloque um bebê Pokemon ou um cartão Pokemon básico da sua pilha de descarte no banco. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Fire Blast",
            ja: "火の爆発",
            fr: "Explosion de feu",
            de: "Feuerexplosion",
            es: "Explosión de fuego",
            it: "Fire Blast",
            pt: "Explosão de fogo",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Light Ninetales in order to use this attack.",
            ja: "この攻撃を使用するために、軽いニネタールに取り付けられた消防エネルギーカードを廃棄します。",
            fr: "Jeter une carte d'énergie d'incendie attachée à Ninetales léger afin d'utiliser cette attaque.",
            de: "Verwerfen Sie eine Feuerergiekarte, die an leichten Ninetales befestigt ist, um diesen Angriff zu verwenden.",
            es: "Deseche una tarjeta de energía de fuego unida a la luz de los Ninetales para usar este ataque.",
            it: "Scartare una scheda di energia antincendio attaccata alle ninetesi leggere per usare questo attacco.",
            pt: "Descarte um cartão de energia de incêndio preso a ninetales leves para usar esse ataque.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
