import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Machamp",
         ja: "軽いマチャンプ",
         fr: "Machamp léger",
         de: "Leichter Machamp",
         es: "Machamp ligero",
         it: "Light Machamp",
         pt: "Machamp leve",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 100,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Tag Team",
            ja: "タグチーム",
            fr: "Équipe de tag",
            de: "Tag -Team",
            es: "Equipo de etiqueta",
            it: "Tag team",
            pt: "Tag Team",
          },
          effect: {
            en: "When you play Light Machamp from your hand, if it is on your Bench, remove 3 damage counters from your Active Pokmon. If it has fewer damage counters than that, remove all of them. Then, switch Light Machamp with your Active Pokmon.",
            ja: "手から軽いマチャンプをプレイしたら、ベンチにある場合は、アクティブなポクモンから3つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。次に、アクティブなポクモンでライトマチャンプを切り替えます。",
            fr: "Lorsque vous jouez à Machamp léger de votre main, s'il est sur votre banc, retirez 3 compteurs de dégâts de votre pokmon actif. S'il a moins de compteurs de dégâts que cela, retirez tous. Ensuite, changez de Machamp léger avec votre pokmon actif.",
            de: "Wenn Sie leichte Machamp von Ihrer Hand spielen, entfernen Sie bei der Bank 3 Schadenszähler von Ihrem aktiven Pokmon. Wenn es weniger Schadenszähler als das hat, entfernen Sie alle. Schalten Sie dann den leichten Machamp mit Ihrem aktiven Pokmon.",
            es: "Cuando juegas a Light Machamp de tu mano, si está en tu banco, retire 3 contadores de daño de tu Pokmon activo. Si tiene menos contadores de daño que eso, retírelos todos. Luego, cambie la luz de Machamp con su Pokmon activo.",
            it: "Quando giochi alla luce machamp dalla tua mano, se è in panchina, rimuovi 3 contatori di danno dal tuo Pokmon attivo. Se ha meno contatori di danno di quello, rimuovili tutti. Quindi, cambia la luce machamp con il tuo Pokmon attivo.",
            pt: "Quando você toca Machamp Light da sua mão, se estiver em seu banco, remova 3 contadores de danos do seu Pokmon ativo. Se tiver menos contadores de danos do que isso, remova todos eles. Em seguida, mude de luz leve com seu Pokmon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Beatdown",
            ja: "ビートダウン",
            fr: "Battement",
            de: "Beatdown",
            es: "Paliza",
            it: "Batdown",
            pt: "Batida",
          },
          effect: {
            en: "If the Defending Pokemon has Dark in its name or is a Darkness Pokemon, flip a coin. If heads, this attack does 100 damage instead of 50.",
            ja: "防御するポケモンがその名前が暗い場合、または暗闇のポケモンである場合は、コインをひっくり返します。頭の場合、この攻撃は50ではなく100のダメージを与えます。",
            fr: "Si le Pokémon en défense a sombre en son nom ou est un Pokémon de l'obscurité, retournez une pièce. Si la tête, cette attaque fait 100 dégâts au lieu de 50.",
            de: "Wenn das verteidigende Pokémon dunkel in seinem Namen hat oder ein Dunkelheitspokémon ist, drehen Sie eine Münze um. Wenn Köpfe, verursacht dieser Angriff 100 Schaden anstelle von 50.",
            es: "Si el Pokémon defensor tiene oscuro en su nombre o es un Pokémon de oscuridad, voltea una moneda. Si se dirige, este ataque hace 100 daños en lugar de 50.",
            it: "Se il Pokemon in difesa ha buio nel suo nome o è un Pokemon di oscurità, capovolgi una moneta. Se la testa, questo attacco infligge 100 danni anziché 50.",
            pt: "Se o Pokémon atual tem escuro em seu nome ou é um Pokémon das trevas, vire uma moeda. Se as cabeças, esse ataque causará 100 danos em vez de 50.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
